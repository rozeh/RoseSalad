import {create} from 'zustand';
import axios from 'axios';

const useStore = create(set => ({
    data:[],
    loading: false,
    hasErrors: false,
    fetch: async() => {
        set(() => ({ loading: true }));
    }
}));

export default useStore;