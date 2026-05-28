import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  modalContent: {
    title: string;
    message: string;
    status: 'success' | 'error';
  };
  openModal: (content: ModalState['modalContent']) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalContent: {
    title: '',
    message: '',
    status: 'success',
  },
  openModal: (content) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false }),
}));