'use client';

import { useState } from 'react';
import {
  MAX_TAGS_PER_PLAYER,
  MAX_TAG_LENGTH,
  TAG_PRESETS,
  addTag,
  removeTag,
  tagStyleFor,
  toggleTag,
} from '@/lib/players/tags';

interface TagPickerProps {
  value: string[];
  onChange: (next: string[]) => void;
}

/**
 * 标签选择器：添加玩家时使用。
 * 只负责编辑一份标签数组，不关心它属于谁。
 */
export default function TagPicker({ value, onChange }: TagPickerProps) {
  const [customInput, setCustomInput] = useState('');
  const [hint, setHint] = useState<string | null>(null);

  const isFull = value.length >= MAX_TAGS_PER_PLAYER;

  const handleAddCustom = () => {
    const next = addTag(value, customInput);

    if (next.length === value.length) {
      setHint(
        value.includes(customInput.trim())
          ? '这个标签已经有了'
          : isFull
          ? `每人最多 ${MAX_TAGS_PER_PLAYER} 个标签`
          : '请输入有效的标签'
      );
      return;
    }

    onChange(next);
    setCustomInput('');
    setHint(null);
  };

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-xs text-gray-400">标签（可选）</span>
        <span className="text-[10px] text-gray-500">
          最多 {MAX_TAGS_PER_PLAYER} 个 · 只做识别用，不影响分组算法
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {TAG_PRESETS.map((preset) => {
          const active = value.includes(preset.label);

          return (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                onChange(toggleTag(value, preset.label));
                setHint(null);
              }}
              className={`rounded-full border px-2.5 py-1 text-xs transition-all ${
                active
                  ? `${tagStyleFor(preset.label)} font-bold`
                  : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
              }`}
            >
              {active ? '✓ ' : ''}
              {preset.label}
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={customInput}
          onChange={(event) => {
            setCustomInput(event.target.value);
            setHint(null);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleAddCustom();
            }
          }}
          maxLength={MAX_TAG_LENGTH}
          placeholder="自定义标签，回车添加"
          className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#0f1117] px-3 py-1.5 text-xs text-gray-100 focus:border-cyan-500/50 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddCustom}
          disabled={!customInput.trim()}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-all ${
            customInput.trim()
              ? 'bg-cyan-500 hover:bg-cyan-400'
              : 'cursor-not-allowed bg-gray-600'
          }`}
        >
          添加
        </button>
      </div>

      {hint && <p className="mt-1.5 text-xs text-amber-400">{hint}</p>}

      {value.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] text-gray-500">已选：</span>
          {value.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onChange(removeTag(value, tag))}
              title="点击移除"
              className={`rounded-full border px-2 py-0.5 text-[11px] transition-opacity hover:opacity-70 ${tagStyleFor(
                tag
              )}`}
            >
              {tag} ✕
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
