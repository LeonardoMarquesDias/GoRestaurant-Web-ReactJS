import { RefObject, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Modal } from '../Modal';
import { Input } from '../Input';

import { Form } from './styles';

import { FoodType } from '../../type';

interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: FoodType;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodType) => void;
}

export function ModalEditFood({ isOpen, editingFood, setIsOpen, handleUpdateFood }: ModalEditFoodProps) {

  const formRef = useRef() as RefObject<FormHandles>;

  async function handleSubmit (food: FoodType) {
    handleUpdateFood(food);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Edit Food</h1>
        <Input name="image" placeholder="Paste the link here" />

        <Input name="name" placeholder="Ex: Italian Food" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descripition" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Edit Food</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

