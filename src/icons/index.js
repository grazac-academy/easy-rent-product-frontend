const Icon = ({ type }) => {
  let icon;
  switch (type) {
    case 'dropdown':
      icon = (
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0L9 12L18 0H0Z"
            fill="#111111"
          />
        </svg>
      );
      break;
    case 'world':
      icon = (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8133 16.6667C19.92 15.7867 20 14.9067 20 14C20 13.0933 19.92 12.2133 19.8133 11.3333H24.32C24.5333 12.1867 24.6666 13.08 24.6666 14C24.6666 14.92 24.5333 15.8133 24.32 16.6667H19.8133ZM17.4533 24.08C18.2533 22.6 18.8666 21 19.2933 19.3333H23.2266C21.9349 21.5577 19.8854 23.2427 17.4533 24.08ZM17.12 16.6667H10.88C10.7466 15.7867 10.6666 14.9067 10.6666 14C10.6666 13.0933 10.7466 12.2 10.88 11.3333H17.12C17.24 12.2 17.3333 13.0933 17.3333 14C17.3333 14.9067 17.24 15.7867 17.12 16.6667ZM14 24.6133C12.8933 23.0133 12 21.24 11.4533 19.3333H16.5466C16 21.24 15.1066 23.0133 14 24.6133ZM8.66663 8.66666H4.77329C6.05177 6.43628 8.09969 4.74864 10.5333 3.91999C9.73329 5.39999 9.13329 6.99999 8.66663 8.66666ZM4.77329 19.3333H8.66663C9.13329 21 9.73329 22.6 10.5333 24.08C8.10479 23.2422 6.05975 21.5569 4.77329 19.3333ZM3.67996 16.6667C3.46663 15.8133 3.33329 14.92 3.33329 14C3.33329 13.08 3.46663 12.1867 3.67996 11.3333H8.18663C8.07996 12.2133 7.99996 13.0933 7.99996 14C7.99996 14.9067 8.07996 15.7867 8.18663 16.6667H3.67996ZM14 3.37332C15.1066 4.97332 16 6.75999 16.5466 8.66666H11.4533C12 6.75999 12.8933 4.97332 14 3.37332ZM23.2266 8.66666H19.2933C18.876 7.01527 18.2581 5.42118 17.4533 3.91999C19.9066 4.75999 21.9466 6.45332 23.2266 8.66666ZM14 0.666656C6.62663 0.666656 0.666626 6.66666 0.666626 14C0.666626 17.5362 2.07138 20.9276 4.57187 23.4281C5.80998 24.6662 7.27984 25.6483 8.89751 26.3184C10.5152 26.9884 12.249 27.3333 14 27.3333C17.5362 27.3333 20.9276 25.9286 23.4281 23.4281C25.9285 20.9276 27.3333 17.5362 27.3333 14C27.3333 12.249 26.9884 10.5152 26.3184 8.89754C25.6483 7.27987 24.6662 5.81001 23.4281 4.5719C22.1899 3.33379 20.7201 2.35166 19.1024 1.6816C17.4847 1.01153 15.7509 0.666656 14 0.666656Z"
            fill="#F8F8F8"
          />
        </svg>
      );
      break;
    case 'search-cancel':
      icon = (
        <svg
          width="40"
          height="40"
          viewBox="0 0 70 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.95 46.475C20.5917 47.0708 21.4083 47.3688 22.4 47.3688C23.3917 47.3688 24.2083 47.0708 24.85 46.475L35 37.05L45.2375 46.5563C45.8792 47.1521 46.6818 47.4359 47.6455 47.4077C48.6068 47.3817 49.4083 47.0708 50.05 46.475C50.6917 45.8792 51.0125 45.1208 51.0125 44.2C51.0125 43.2792 50.6917 42.5208 50.05 41.925L39.9 32.5L50.1375 22.9937C50.7792 22.3979 51.0848 21.6526 51.0545 20.7577C51.0265 19.8651 50.6917 19.1208 50.05 18.525C49.4083 17.9292 48.5917 17.6313 47.6 17.6313C46.6083 17.6313 45.7917 17.9292 45.15 18.525L35 27.95L24.7625 18.4438C24.1208 17.8479 23.3193 17.563 22.358 17.589C21.3943 17.6172 20.5917 17.9292 19.95 18.525C19.3083 19.1208 18.9875 19.8792 18.9875 20.8C18.9875 21.7208 19.3083 22.4792 19.95 23.075L30.1 32.5L19.8625 42.0063C19.2208 42.6021 18.9152 43.3463 18.9455 44.239C18.9735 45.1338 19.3083 45.8792 19.95 46.475ZM35 65C30.1583 65 25.6083 64.1463 21.35 62.439C17.0917 60.7338 13.3875 58.4188 10.2375 55.4938C7.0875 52.5688 4.59433 49.1292 2.758 45.175C0.919334 41.2208 0 36.9958 0 32.5C0 28.0042 0.919334 23.7792 2.758 19.825C4.59433 15.8708 7.0875 12.4313 10.2375 9.50625C13.3875 6.58125 17.0917 4.26508 21.35 2.55775C25.6083 0.852583 30.1583 0 35 0C39.8417 0 44.3917 0.852583 48.65 2.55775C52.9083 4.26508 56.6125 6.58125 59.7625 9.50625C62.9125 12.4313 65.4057 15.8708 67.242 19.825C69.0807 23.7792 70 28.0042 70 32.5C70 36.9958 69.0807 41.2208 67.242 45.175C65.4057 49.1292 62.9125 52.5688 59.7625 55.4938C56.6125 58.4188 52.9083 60.7338 48.65 62.439C44.3917 64.1463 39.8417 65 35 65Z"
            fill="#BFBFBF"
          />
        </svg>
      );
      break;
    default:
      icon = null;
  }

  return <div>{icon}</div>;
};

export default Icon;
