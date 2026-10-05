"use client";

import { useEffect, useRef, useState } from "react";

const TARGET_VOLUME = 0.55;

export function SoundToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (fadeRef.current) window.clearInterval(fadeRef.current);
    };
  }, []);

  function fadeTo(audio: HTMLAudioElement, to: number, onDone?: () => void) {
    if (fadeRef.current) window.clearInterval(fadeRef.current);
    fadeRef.current = window.setInterval(() => {
      const next = audio.volume + (to > audio.volume ? 0.05 : -0.05);
      audio.volume = Math.min(1, Math.max(0, next));
      if (Math.abs(audio.volume - to) < 0.051) {
        audio.volume = to;
        if (fadeRef.current) window.clearInterval(fadeRef.current);
        onDone?.();
      }
    }, 60);
  }

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      setPlaying(false);
      fadeTo(audio, 0, () => audio.pause());
      return;
    }

    try {
      audio.volume = 0;
      await audio.play();
      setPlaying(true);
      fadeTo(audio, TARGET_VOLUME);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <button
        className={`sound-toggle${playing ? " is-playing" : ""}`}
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pausar música de fundo" : "Tocar música de fundo"}
      >
        <span className="sound-label">Escute um som enquanto navega</span>
        <span className="sound-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9.5v5h3.6L12.5 19V5L7.6 9.5H4Z" />
            <path className="wave wave-1" d="M15.6 9.2a4 4 0 0 1 0 5.6" />
            <path className="wave wave-2" d="M18.2 6.8a7.4 7.4 0 0 1 0 10.4" />
            <path className="mute-slash" d="M16 9.5l5 5M21 9.5l-5 5" />
          </svg>
        </span>
      </button>
      <audio ref={audioRef} src="/audio/musica.mp3" loop preload="none" />
    </>
  );
}
