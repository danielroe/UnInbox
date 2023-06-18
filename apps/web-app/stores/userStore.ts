export const useUserStore = defineStore('userStore', () => {
  const user = ref({ id: 'asdfesda', name: 'John Doe' });
  const userOrgs = ref([
    {
      id: '23n32k234',
      name: 'Pizza Inc',
      avatar: '',
      emoji: '🍕'
    },
    {
      id: '324kgto',
      name: 'UnInbox Inc',
      avatar: '',
      emoji: '📥'
    },
    {
      id: '324kgsadto',
      name: 'ACME Inc',
      avatar: '',
      emoji: '🧨'
    }
  ]);
  const profiles = ref([{}]);

  return { user, userOrgs, profiles };
});
