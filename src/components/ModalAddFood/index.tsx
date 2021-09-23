import { RefObject, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import { Modal}  from '../Modal';
import { Input } from '../Input';

import { Form } from './styles';

import { FoodType } from '../../type'

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodType) => void;
}

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  const formRef = useRef() as RefObject<FormHandles>;


  async function handleSubmit(food: FoodType) {
    handleAddFood(food);
    setIsOpen();
  }
 
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>New Food</h1>
        <Input name="image" placeholder="Paste the link here" />

        <Input name="name" placeholder="Ex: Italian Food" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Description" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Add New Food</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};


