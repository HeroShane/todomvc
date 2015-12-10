class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :content
      t.integer :state
    end
  end
end
