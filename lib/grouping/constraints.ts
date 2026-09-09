import type { AssignResult, PairConstraint } from './types';

function teamIndexFor(result: AssignResult, playerName: string): 1 | 2 | null {
  if (result.team1.some((groupedPlayer) => groupedPlayer.player.name === playerName)) {
    return 1;
  }

  if (result.team2.some((groupedPlayer) => groupedPlayer.player.name === playerName)) {
    return 2;
  }

  return null;
}

export function satisfiesPairConstraints(
  result: AssignResult,
  constraints: PairConstraint[]
): boolean {
  for (const constraint of constraints) {
    const teamA = teamIndexFor(result, constraint.playerA);
    const teamB = teamIndexFor(result, constraint.playerB);

    // 约束引用了不存在的玩家时视为不满足，避免静默产出错误结果。
    if (teamA === null || teamB === null) return false;

    const sameTeam = teamA === teamB;

    if (constraint.type === 'avoid' && sameTeam) return false;
    if (constraint.type === 'require' && !sameTeam) return false;
  }

  return true;
}
