let initialState = {
  links: [
    { title: 'Profile', path: '/profile' },
    { title: 'Messages', path: '/dialogs' },
    { title: 'News', path: '/news' },
    { title: 'Music', path: '/music' },
    { title: 'Settings', path: '/settings' },
    { title: 'Users', path: '/users' }
  ],
  friends: [
    { id: 1, name: 'Misha' },
    { id: 2, name: 'Masha' },
    { id: 3, name: 'Dima' }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
