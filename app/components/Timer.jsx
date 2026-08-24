import { useEffect, useState } from "react";

function calculateTimeLeft(targetDate) {
  const difference =
    new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const CountdownTimer = ({
  targetDate,
  expiredText = "JT Innoventions is Live!",
}) => {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(targetDate)
  );

  const [prevTime, setPrevTime] =
    useState(timeLeft);

  useEffect(() => {
    let timer;

    const updateCountdown = () => {
      const updated =
        calculateTimeLeft(targetDate);

      setTimeLeft((previous) => {
        setPrevTime(previous);
        return updated;
      });

      if (!updated && timer) {
        window.clearInterval(timer);
      }
    };

    updateCountdown();

    timer = window.setInterval(
      updateCountdown,
      1000
    );

    return () => window.clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <span className="text-lg font-semibold tracking-wide text-[var(--site-primary-hover)]">
        {expiredText}
      </span>
    );
  }

  return (
    <div className="mt-[-1rem] flex select-none justify-center gap-8 font-sans">
      {["days", "hours", "minutes", "seconds"].map(
        (unit) => {
          const current = timeLeft[unit];
          const previous = prevTime?.[unit];
          const isChanged = current !== previous;

          return (
            <div
              key={unit}
              className="mt-[1.5rem] flex flex-col items-center"
            >
              <span
                key={current}
                id="Timer"
                className={`bg-gradient-to-r from-[var(--site-primary-hover)] to-[var(--site-accent)] bg-clip-text text-base font-extrabold text-transparent drop-shadow-[0_0_8px_var(--site-glow-strong)] transition-transform duration-300 sm:text-lg ${
                  isChanged
                    ? "scale-110"
                    : "scale-100"
                }`}
              >
                {String(current).padStart(2, "0")}
              </span>

              <span
                id="Timer"
                className="mt-1 text-xs uppercase tracking-widest text-[var(--site-heading)] sm:text-[13px]"
              >
                {unit}
              </span>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CountdownTimer;