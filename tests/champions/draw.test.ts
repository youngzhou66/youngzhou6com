import { describe, expect, it } from 'vitest';
import { drawChampionAssignments } from '@/lib/champions/draw';
import { championPoolFor } from '@/lib/champions/pool';
import type { ChampionPoolMode } from '@/lib/champions/types';
import { groupedPlayersWithRoles } from '../helpers';

const MODES: ChampionPoolMode[] = ['all', 'top20', 'meta'];
const COUNTS = [1, 2, 3];

describe('drawChampionAssignments', () => {
  for (const mode of MODES) {
    for (const count of COUNTS) {
      it(`${mode} 模式每人抽 ${count} 个英雄时满足数量与去重规则`, () => {
        const groupedPlayers = groupedPlayersWithRoles();

        for (let run = 0; run < 10; run++) {
          const draw = drawChampionAssignments(
            groupedPlayers,
            mode,
            count
          );

          expect(draw).not.toBeNull();

          const assignments = Object.entries(draw ?? {});
          expect(assignments).toHaveLength(10);

          const allChampionKeys = assignments.flatMap(([, champions]) =>
            champions.map((champion) => champion.key)
          );
          expect(allChampionKeys).toHaveLength(10 * count);
          expect(new Set(allChampionKeys).size).toBe(10 * count);

          for (const groupedPlayer of groupedPlayers) {
            const champions = draw?.[groupedPlayer.player.name] ?? [];
            const poolKeys = new Set(
              championPoolFor(groupedPlayer.position, mode).map(
                (champion) => champion.key
              )
            );

            expect(champions).toHaveLength(count);
            champions.forEach((champion) => {
              expect(poolKeys.has(champion.key)).toBe(true);
            });
          }
        }
      });
    }
  }

  it('需求数量超过英雄池时返回 null', () => {
    const draw = drawChampionAssignments(
      groupedPlayersWithRoles(),
      'all',
      100
    );

    expect(draw).toBeNull();
  });
});
