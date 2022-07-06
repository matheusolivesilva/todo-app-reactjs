import { AxiosResponse } from 'axios';
import { ITodo } from 'interfaces';
import { Api } from 'providers';

const getAllTodos = (): Promise<AxiosResponse<ITodo[]>> => Api.get<ITodo[]>('/v1/todos');

const createTodo = (todo: Pick<ITodo, 'task' | 'isDone'>): Promise<AxiosResponse<ITodo>> =>
  Api.post<ITodo>('/v1/todos', todo);

const updateTodo = (id: string, todo: Pick<ITodo, 'task' | 'isDone'>): Promise<AxiosResponse<ITodo>> =>
  Api.put<ITodo>(`/v1/todos/${id}`, todo);

export const TodoService = {
  getAllTodos,
  createTodo,
  updateTodo,
};
