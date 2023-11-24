function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={className}
      fill="white"
      xmlns="http://www.w3.org/2000/svg">
      <title>Web icon</title>
      <path
        d="M9.42399 9.12667C9.27248 8.66048 8.83542 8.31666 8.31678 8.31666H7.73405V6.56845C7.73405 6.4139 7.67265 6.26567 7.56337 6.15639C7.45408 6.0471 7.30586 5.98571 7.15131 5.98571H3.65488V4.82023H4.82035C4.97491 4.82023 5.12313 4.75884 5.23241 4.64955C5.3417 4.54027 5.40309 4.39205 5.40309 4.23749V3.07202H6.56857C6.87767 3.07202 7.17412 2.94923 7.39269 2.73066C7.61126 2.51209 7.73405 2.21564 7.73405 1.90654V1.66762C8.43128 1.94871 9.05001 2.39457 9.53729 2.96703C10.0246 3.53949 10.3659 4.2215 10.532 4.95468C10.6981 5.68786 10.6841 6.45037 10.4911 7.17695C10.2981 7.90352 9.93198 8.57252 9.42399 9.12667ZM5.40309 10.6068C3.10128 10.3213 1.32392 8.36328 1.32392 5.98571C1.32392 5.62441 1.37054 5.27477 1.4463 4.94261L4.23762 7.73392V8.31666C4.23762 8.62577 4.36041 8.92221 4.57898 9.14078C4.79755 9.35935 5.09399 9.48214 5.40309 9.48214M5.98583 0.158325C5.22057 0.158325 4.4628 0.309055 3.75579 0.601908C3.04878 0.894762 2.40637 1.324 1.86525 1.86513C0.772402 2.95797 0.158447 4.44019 0.158447 5.98571C0.158447 7.53123 0.772402 9.01345 1.86525 10.1063C2.40637 10.6474 3.04878 11.0767 3.75579 11.3695C4.4628 11.6624 5.22057 11.8131 5.98583 11.8131C7.53135 11.8131 9.01357 11.1991 10.1064 10.1063C11.1993 9.01345 11.8132 7.53123 11.8132 5.98571C11.8132 5.22045 11.6625 4.46268 11.3696 3.75567C11.0768 3.04865 10.6475 2.40625 10.1064 1.86513C9.56529 1.324 8.92289 0.894762 8.21587 0.601908C7.50886 0.309055 6.75109 0.158325 5.98583 0.158325Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default GlobeIcon;