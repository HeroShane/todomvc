class ChangeContentFromTextToDetail < ActiveRecord::Migration
  def change
    rename_column :todos, :text, :detail
  end
end
