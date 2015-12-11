class ChangeContentFromTodo < ActiveRecord::Migration
  def change
    rename_column :todos, :content, :text
    change_column :todos, :state, :integer, default: 0
  end
end
