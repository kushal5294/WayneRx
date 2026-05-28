export const AnimatedLogo = () => {
  return (
    <div className="w-40 sm:w-56">
      <svg
        viewBox="0 0 2048 886"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Gradient for the sweeping effect (faded tail, sharp leading edge) */}
          <linearGradient id="sweep-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="95%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Mask that animates an invisible rectangle across the viewBox */}
          <mask id="sweep-mask">
            <rect y="-100" width="600" height="1100" fill="url(#sweep-grad)">
              <animate
                attributeName="x"
                values="-600;2200"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </rect>
          </mask>
        </defs>

        {/* Faint background EKG track (the "hidden" state) */}
        <path
          opacity="0.15"
          transform="translate(218,118)"
          d="m0 0h16l20 3 16 4 19 8 17 9 12 9 10 9 12 12 12 17 10 19 7 21 4 19 1 12v203h41l2-9 16-49 9-27 5-7 8-3 10 1 8 7 4 12 11 44 8 31 3 14 7-44 4-29 5-32 6-45 12-84 4-23 4-8 7-4h10l6 3 5 6 2 6 11 84 13 100 14 108 9 70 2 12 6-42 11-65 4-17 4-6 6-4h1353l8 5 4 6v12l-4 6-6 5-3 1-34 1h-1297l-6 35-15 94-10 61-6 37-3 6-5 4-6 2h-7l-7-3-6-7-3-17-14-110-10-77-10-81-10-73-1-10-8 55-9 62-8 57-6 38-3 7-7 6-3 1h-7l-8-3-6-7-4-13-16-65-11-44-1-3-10 31-5 10-5 4-4 2-58 1v198l-3 21-5 17-7 16-11 18-8 10-11 12-10 9-10 7-15 9-18 8-18 5-21 3h-23l-22-3-18-5-16-7-15-8-13-10-10-9-10-10-11-15-8-14-7-16-5-16-3-15-1-189v-45l1-220 4-21 7-19 8-16 10-15 11-13 12-12 16-12 21-11 19-7 17-4z"
          fill="#e63a46"
        />

        {/* Highlighted Red EKG + badge outline (Sweeping state) */}
        <path
          mask="url(#sweep-mask)"
          transform="translate(218,118)"
          d="m0 0h16l20 3 16 4 19 8 17 9 12 9 10 9 12 12 12 17 10 19 7 21 4 19 1 12v203h41l2-9 16-49 9-27 5-7 8-3 10 1 8 7 4 12 11 44 8 31 3 14 7-44 4-29 5-32 6-45 12-84 4-23 4-8 7-4h10l6 3 5 6 2 6 11 84 13 100 14 108 9 70 2 12 6-42 11-65 4-17 4-6 6-4h1353l8 5 4 6v12l-4 6-6 5-3 1-34 1h-1297l-6 35-15 94-10 61-6 37-3 6-5 4-6 2h-7l-7-3-6-7-3-17-14-110-10-77-10-81-10-73-1-10-8 55-9 62-8 57-6 38-3 7-7 6-3 1h-7l-8-3-6-7-4-13-16-65-11-44-1-3-10 31-5 10-5 4-4 2-58 1v198l-3 21-5 17-7 16-11 18-8 10-11 12-10 9-10 7-15 9-18 8-18 5-21 3h-23l-22-3-18-5-16-7-15-8-13-10-10-9-10-10-11-15-8-14-7-16-5-16-3-15-1-189v-45l1-220 4-21 7-19 8-16 10-15 11-13 12-12 16-12 21-11 19-7 17-4z"
          fill="#e63a46"
        />

        {/* Blue badge fill — top half */}
        <path
          transform="translate(218,118)"
          d="m0 0h16l20 3 16 4 19 8 17 9 12 9 10 9 12 12 12 17 10 19 7 21 4 19 1 12v203h-298v-213l4-21 7-19 8-16 10-15 11-13 12-12 16-12 21-11 19-7 17-4z"
          fill="#11486f"
        />

        {/* Blue badge fill — bottom half */}
        <path
          transform="translate(76,498)"
          d="m0 0h175l123 1v198l-3 21-5 17-7 16-11 18-8 10-11 12-10 9-10 7-15 9-18 8-18 5-21 3h-23l-22-3-18-5-16-7-15-8-13-10-10-9-10-10-11-15-8-14-7-16-5-16-3-15-1-177z"
          fill="#11486f"
        />

        {/* Blue text — WAYNE RX row */}
        <path
          transform="translate(844,250)"
          d="m0 0h37l14 47 16 53 4 11 1 1 12-36 13-38 7-19 7-18 1-1h38l-2 9-8 20-11 30-11 31-24 72-2 4h-40l-11-33-7-23-10-31-6-20-1-1-4 11-6 21-12 36-10 32-4 8h-40l-12-36-12-38-11-35-13-41-4-15h39l4 10 13 43 8 26 10 30v3h2l2-11 8-25 9-28 12-39z"
          fill="#11486f"
        />
        <path
          transform="translate(1692,250)"
          d="m0 0h83l15 2 13 5 10 6 10 9 7 11 4 14v26l-4 13-7 11-8 8-11 7 2 5 28 42 4 8-43-1-21-31-8-12-1-3h-35v46h-38z"
          fill="#11486f"
        />
        <path
          transform="translate(1308,250)"
          d="m0 0h34l14 18 13 18 28 38 14 18 4 6 2 1v-98h38l-1 165h-34l-14-17-10-13-22-28-14-18-9-11-6-8v-2h-2v97l-35 1z"
          fill="#11486f"
        />
        <path
          transform="translate(1041,250)"
          d="m0 0h40l12 27 12 28 15 34 12 27 21 48v2h-41l-10-23-4-10h-72l-11 29-2 4h-41l3-9 14-34 17-41 10-23 6-15 6-13z"
          fill="#11486f"
        />
        <path
          transform="translate(1849,250)"
          d="m0 0h45l4 5 14 22 13 19 4 6 4-4 10-15 13-19 8-11 2-3h43l-7 11-12 17-14 20-16 23-6 10 7 11 10 14 13 19 13 18 15 22-1 2h-43l-6-7-3-5-8-12-19-28-4-4-2 4-13 19-19 29-2 3h-45l2-5 13-18 14-20 13-18 15-22-1-4-13-19-14-20-13-18-13-19z"
          fill="#11486f"
        />
        <path
          transform="translate(1485,250)"
          d="m0 0h118v24l-1 8h-80v35h67v30h-67l1 37h80v32l-20 1h-98z"
          fill="#11486f"
        />
        <path
          transform="translate(1125,250)"
          d="m0 0h43l14 26 26 44 2 1 2-5 28-48 8-14 3-4h40l-6 11-8 13-18 30-16 27-6 10-8 14-1 2-1 59h-38l-1-59-11-19-14-23-32-54z"
          fill="#11486f"
        />

        {/* Blue text — PHARMACY row */}
        <path
          transform="translate(1217,549)"
          d="m0 0h85l12 3 14 7 9 8 7 11 4 15v19l-4 15-5 9-8 8-11 7 7 11 13 20 11 18v2h-38l-10-15-12-20-5-8-33-1v44h-36z"
          fill="#11486f"
        />
        <path
          transform="translate(1371,549)"
          d="m0 0h31l6 10 14 25 15 27 10 19 6 10 14-24 14-26 10-17 12-21 2-3h30v153h-33v-86h-2l-2 5-11 20-11 19-9 15-7 11-1 1h-14l-7-10-11-19-15-27-6-11-1 7-1 75h-33z"
          fill="#11486f"
        />
        <path
          transform="translate(745,549)"
          d="m0 0h86l12 3 13 7 11 11 7 14 3 14v10l-3 16-6 12-9 10-11 7-13 5-21 3h-33v40l-1 1h-35z"
          fill="#11486f"
        />
        <path
          transform="translate(1102,549)"
          d="m0 0h36l3 4 19 44 11 25 34 78v2h-37l-7-14-7-17h-67l-3 9-8 21-1 1h-35l1-7 19-46 12-30 12-28 17-41z"
          fill="#11486f"
        />
        <path
          transform="translate(1609,549)"
          d="m0 0h36l5 8 26 60 13 31 13 30 9 21v3h-35l-8-16-5-13v-2l-69 1-12 29-1 1h-34l1-7 10-25 17-40 15-37 11-25 7-18z"
          fill="#11486f"
        />
        <path
          transform="translate(899,549)"
          d="m0 0h36v61l55-1 1-60h36v153h-36v-61h-56v61h-35l-1-117z"
          fill="#11486f"
        />
        <path
          transform="translate(1784,546)"
          d="m0 0h30l17 5 15 8 10 8 5 6-5 6-8 7-10 9-7-6-9-6-12-4h-22l-9 2-11 7-8 9-4 8-3 12v17l4 13 6 10 7 7 13 6 8 2h18l10-3 10-6 9-8 6 4 17 17-2 5-11 10-10 6-13 5-15 3h-22l-20-4-12-5-14-9-10-10v-2h-2l-8-14-5-16-1-3v-32l6-19 6-11 9-11 11-9 10-6 13-5z"
          fill="#11486f"
        />
        <path
          transform="translate(1862,549)"
          d="m0 0h39l5 7 6 11 15 26 11 18v2l5-5 13-22 15-25 7-12h37l-7 14-13 22-9 15-10 17-18 30-1 55-1 1h-22l-13-1-1-54-6-9-6-11-9-15-16-28-8-13-13-22z"
          fill="#11486f"
        />

        {/* White Rx cutouts + letter counter-shapes */}
        <path
          transform="translate(294,634)"
          d="m0 0 8 1 5 5 2 3v42l-3 17-5 15-6 11-11 13-12 10-16 8-13 4-7 1-6-3-4-5-1-2v-7l3-5 5-4 15-4 11-6 10-9 8-14 4-16 2-18v-26l4-7z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(205,181)"
          d="m0 0h11l5 4 1 2v9l-5 6-15 5-12 6-7 5-7 8-7 11-4 10-2 9-1 10-1 49-3 6-5 4h-7l-5-5-2-4v-63l4-16 8-16 8-11 5-6 11-9 14-9z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(1730,282)"
          d="m0 0h42l11 4 6 4 6 12v16l-4 8-5 5-5 4-10 3h-40l-1-1z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(781,579)"
          d="m0 0h44l9 6 6 9 1 3v12l-6 12-8 6-7 3h-39z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(1252,579)"
          d="m0 0h44l7 4 6 7 3 7v12l-3 7-7 8-8 5-4 1h-38z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(1059,291)"
          d="m0 0 3 1 15 36 9 23h-50l11-29z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(1626,588)"
          d="m0 0 3 3 16 38 5 11v3h-46l3-9 16-40z"
          fill="#FDFDFD"
        />
        <path
          transform="translate(1120,588)"
          d="m0 0 2 2 15 36 5 13 1 4h-46l2-6 17-41z"
          fill="#FDFDFD"
        />
      </svg>
    </div>
  );
};

export default AnimatedLogo;
