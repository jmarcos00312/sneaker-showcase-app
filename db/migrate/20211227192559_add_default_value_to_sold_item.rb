class AddDefaultValueToSoldItem < ActiveRecord::Migration[6.1]
  def change
    # change_column :items, :sold, :boolean, default: false
    change_column_default :items, :sold, false
    #Ex:- :default =>''
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
