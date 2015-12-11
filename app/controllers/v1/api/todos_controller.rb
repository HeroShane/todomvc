
class V1::Api::TodosController < ApplicationController
  before_action :find_todo, only: [:update, :destroy]

  def index
    result = Todo.where(params.permit(:state))
    render json: result, each_serializer: TodoSerializer
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save()
      render json: @todo, serializer: TodoSerializer
    else
      render json: {msg: @todo.errors.full_messages }, status: 403
    end
  end

  def update
    if @todo.update_attributes(todo_params)
      render json: @todo, serializer: TodoSerializer
    else
      render json: {msg: @todo.errors.full_messages }, status: 403
    end
  end

  def destroy
    if @todo.destroy
      render json: @todo, serializer: TodoSerializer
    else
      render json: {msg: @todo.errors.full_messages }, status: 403
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:detail, :state)
  end

  def find_todo
    @todo = Todo.find(params[:id])
  end

end
