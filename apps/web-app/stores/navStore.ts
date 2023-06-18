export const useNavStore = defineStore('navStore', () => {
  const filteredOrg = ref('');
  function setOrg(org: string) {
    filteredOrg.value = org;
  }
  function resetOrg() {
    filteredOrg.value = '';
  }
  return { filteredOrg, setOrg, resetOrg };
});
