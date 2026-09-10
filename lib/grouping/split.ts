import type { Player, Position } from '@/data/players';
import { POSITIONS } from './constants';
import { satisfiesPairConstraints } from './constraints';
import { buildGroupedPlayer } from './elo';
import type {
  AssignResult,
  GroupedPlayer,
  PairConstraint,
  SplitOutcome,
} from './types';

function buildSplitFromRoles(
  players: Player[],
  roles: Position[],
  mask: number
): { result: AssignResult; diff: number; max: number } {
  const slots: GroupedPlayer[] = players.map((player, index) => ({
    ...buildGroupedPlayer(player, roles[index]),
  }));

  const team1: GroupedPlayer[] = [];
  const team2: GroupedPlayer[] = [];
  let sum1 = 0;
  let sum2 = 0;

  for (let positionIndex = 0; positionIndex < POSITIONS.length; positionIndex++) {
    const pair = slots.filter(
      (slot) => slot.position === POSITIONS[positionIndex]
    );
    const [a, b] = pair;
    const blue = (mask >> positionIndex) & 1 ? b : a;
    const red = (mask >> positionIndex) & 1 ? a : b;

    sum1 += blue.weightedElo;
    sum2 += red.weightedElo;
    team1.push(blue);
    team2.push(red);
  }

  return {
    result: { team1, team2 },
    diff: Math.abs(sum1 - sum2),
    max: Math.max(sum1, sum2),
  };
}

export function balancedSplitFromRoles(
  players: Player[],
  roles: Position[],
  constraints: PairConstraint[] = []
): SplitOutcome | null {
  let bestDiff = Infinity;
  let bestOutcomes: { result: AssignResult; max: number }[] = [];

  for (let mask = 0; mask < 32; mask++) {
    const outcome = buildSplitFromRoles(players, roles, mask);

    if (!satisfiesPairConstraints(outcome.result, constraints)) continue;

    if (outcome.diff < bestDiff) {
      bestDiff = outcome.diff;
      bestOutcomes = [{ result: outcome.result, max: outcome.max }];
    } else if (outcome.diff === bestDiff) {
      bestOutcomes.push({ result: outcome.result, max: outcome.max });
    }
  }

  if (bestOutcomes.length === 0) return null;

  const chosen =
    bestOutcomes[Math.floor(Math.random() * bestOutcomes.length)];

  return {
    result: chosen.result,
    diffRatio: bestDiff / chosen.max,
  };
}

export function randomSplitFromRoles(
  players: Player[],
  roles: Position[],
  constraints: PairConstraint[] = []
): SplitOutcome | null {
  const validOutcomes: { result: AssignResult; diff: number; max: number }[] =
    [];

  for (let mask = 0; mask < 32; mask++) {
    const outcome = buildSplitFromRoles(players, roles, mask);

    if (satisfiesPairConstraints(outcome.result, constraints)) {
      validOutcomes.push(outcome);
    }
  }

  if (validOutcomes.length === 0) return null;

  const chosen =
    validOutcomes[Math.floor(Math.random() * validOutcomes.length)];

  return {
    result: chosen.result,
    diffRatio: chosen.diff / chosen.max,
  };
}
