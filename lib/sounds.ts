let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;

type WindowWithWebkit = Window & {
  webkitAudioContext?: typeof AudioContext;
};

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const w = window as WindowWithWebkit;
    const Ctor = window.AudioContext || w.webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.6;
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  return ctx;
}

function whiteNoiseBuffer(
  audioCtx: AudioContext,
  duration: number,
  decay = 0,
): AudioBuffer {
  const length = Math.floor(audioCtx.sampleRate * duration);
  const buffer = audioCtx.createBuffer(1, length, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    const env = decay > 0 ? Math.exp(-(i / audioCtx.sampleRate) * decay) : 1;
    data[i] = (Math.random() * 2 - 1) * env;
  }
  return buffer;
}

export function playSizzle(duration = 1.4) {
  const audioCtx = getCtx();
  if (!audioCtx || !masterGain) return;
  const now = audioCtx.currentTime;

  const noise = audioCtx.createBufferSource();
  noise.buffer = whiteNoiseBuffer(audioCtx, duration);

  const bp = audioCtx.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 4;
  bp.frequency.setValueAtTime(2800, now);
  bp.frequency.exponentialRampToValueAtTime(900, now + duration);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.35, now + 0.12);
  noiseGain.gain.exponentialRampToValueAtTime(0.08, now + duration - 0.1);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noise.connect(bp).connect(noiseGain).connect(masterGain);
  noise.start(now);
  noise.stop(now + duration);

  const whistle = audioCtx.createOscillator();
  whistle.type = "sine";
  whistle.frequency.setValueAtTime(1500, now);
  whistle.frequency.exponentialRampToValueAtTime(420, now + duration);

  const whistleGain = audioCtx.createGain();
  whistleGain.gain.setValueAtTime(0.0001, now);
  whistleGain.gain.exponentialRampToValueAtTime(0.09, now + 0.18);
  whistleGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  whistle.connect(whistleGain).connect(masterGain);
  whistle.start(now);
  whistle.stop(now + duration);
}

export function playBoom() {
  const audioCtx = getCtx();
  if (!audioCtx || !masterGain) return;
  const now = audioCtx.currentTime;
  const duration = 0.9;

  const rumble = audioCtx.createBufferSource();
  rumble.buffer = whiteNoiseBuffer(audioCtx, duration);

  const lp = audioCtx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(500, now);
  lp.frequency.exponentialRampToValueAtTime(80, now + duration);
  lp.Q.value = 0.7;

  const rumbleGain = audioCtx.createGain();
  rumbleGain.gain.setValueAtTime(0.0001, now);
  rumbleGain.gain.exponentialRampToValueAtTime(0.7, now + 0.02);
  rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  rumble.connect(lp).connect(rumbleGain).connect(masterGain);
  rumble.start(now);
  rumble.stop(now + duration);

  const sub = audioCtx.createOscillator();
  sub.type = "sine";
  sub.frequency.setValueAtTime(90, now);
  sub.frequency.exponentialRampToValueAtTime(32, now + 0.35);

  const subGain = audioCtx.createGain();
  subGain.gain.setValueAtTime(0.0001, now);
  subGain.gain.exponentialRampToValueAtTime(0.8, now + 0.01);
  subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

  sub.connect(subGain).connect(masterGain);
  sub.start(now);
  sub.stop(now + 0.5);

  const crackle = audioCtx.createBufferSource();
  crackle.buffer = whiteNoiseBuffer(audioCtx, 0.6, 5);

  const hp = audioCtx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 3500;

  const crackleGain = audioCtx.createGain();
  crackleGain.gain.setValueAtTime(0.0001, now);
  crackleGain.gain.exponentialRampToValueAtTime(0.18, now + 0.06);
  crackleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

  crackle.connect(hp).connect(crackleGain).connect(masterGain);
  crackle.start(now + 0.02);
  crackle.stop(now + 0.62);
}
