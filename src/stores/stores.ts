import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
    state: () => ({
        SelectedPage: sessionStorage.getItem("SelectedPage") || 1,// 給分頁顯示用,Mabinogi
        isMenuOpen: false, //選單開啟，預設關閉
        isItemOpen: false, //選單開啟，預設關閉
        isEchstoneOpen: false, //選單開啟，預設關閉
    }),
    actions: {
      setSelectedPage(value: number) {
        this.SelectedPage = value;
        sessionStorage.setItem('SelectedPage', value.toString());
      },
    },
});
