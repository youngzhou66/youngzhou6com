import { TIER_INFO, type Player, type Position } from '@/data/players';
import { POSITIONS } from './constants';
import type {
  AssignResult,
  GroupedPlayer,
  SplitOutcome,
} from './types';

export function balancedSplitFromRoles(
  players: Player[],
  roles: Position[]
): SplitOutcome {
  const slots: GroupedPlayer[] = players.map((player, index) => ({
    player,
    position: roles[index],
    tier: player.positions[roles[index]],
    elo: TIER_INFO[player.positions[roles[index]]].elo,
  }));

  const orient = (mask: number) => {
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

      sum1 += blue.elo;
      sum2 += red.elo;
      team1.push(blue);
      team2.push(red);
    }

    return {
      result: { team1, team2 },
      diff: Math.abs(sum1 - sum2),
      max: Math.max(sum1, sum2),
    };
  };

  let bestDiff = Infinity;
  let bestOutcomes: { result: AssignResult; max: number }[] = [];

  for (let mask = 0; mask < 32; mask++) {
    const outcome = orient(mask);

    if (outcome.diff < bestDiff) {
      bestDiff = outcome.diff;
      bestOutcomes = [{ result: outcome.result, max: outcome.max }];
    } else if (outcome.diff === bestDiff) {
      bestOutcomes.push({ result: outcome.result, max: outcome.max });
    }
  }

  const chosen =
    bestOutcomes[Math.floor(Math.random() * bestOutcomes.length)];

  return {
    result: chosen.result,
    diffRatio: bestDiff / chosen.max,
  };
}

export function randomSplitFromRoles(
  players: Player[],
  roles: Position[]
): SplitOutcome {
  const team1: GroupedPlayer[] = [];
  const team2: GroupedPlayer[] = [];
  let sum1 = 0;
  let sum2 = 0;

  for (const position of POSITIONS) {
    const pair = players
      .map((player, index) => ({
        player,
        role: roles[index],
        tier: player.positions[roles[index]],
        elo: TIER_INFO[player.positions[roles[index]]].elo,
      }))
      .filter((slot) => slot.role === position);
    const [a, b] = pair;
    const blue = Math.random() < 0.5 ? a : b;
    const red = blue === a ? b : a;

    const blueGroup: GroupedPlayer = {
      player: blue.player,
      position,
      tier: blue.tier,
      elo: blue.elo,
    };
    const redGroup: GroupedPlayer = {
      player: red.player,
      position,
      tier: red.tier,
      elo: red.elo,
    };

    team1.push(blueGroup);
    team2.push(redGroup);
    sum1 += blue.elo;
    sum2 += red.elo;
  }

  const max = Math.max(sum1, sum2);

  return {
    result: { team1, team2 },
    diffRatio: Math.abs(sum1 - sum2) / max,
  };
}
