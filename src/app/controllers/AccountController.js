class AccountController {
    // Hiển thị danh sách tài khoản
    listAccounts(req, res) {
        const accounts = [
            { id: 1, email: 'user@example.com', role: 'User', status: 'Hoạt động' },
            { id: 2, email: 'admin@example.com', role: 'Admin', status: 'Bị khóa' },
            { id: 3, email: 'user_1@example.com', role: 'User', status: 'Hoạt động' },
            { id: 4, email: 'user_2@example.com', role: 'User', status: 'Hoạt động' },
            { id: 5, email: 'user_3@example.com', role: 'User', status: 'Hoạt động' },
            { id: 6, email: 'user_4@example.com', role: 'User', status: 'Hoạt động' },
        ];
        res.render('accounts', { accounts });
    }
  
    // Hiển thị trang chỉnh sửa tài khoản
    editAccount(req, res) {
        const accountId = req.params.id;
        res.render('edit-account', { accountId });
    }
  
    // Xử lý cập nhật tài khoản
    updateAccount(req, res) {
        const accountId = req.params.id;
        res.redirect('/accounts');
    }
  
    // Xử lý xóa tài khoản
    deleteAccount(req, res) {
        const accountId = req.params.id;
        res.redirect('/accounts');
    }
  }
  
  module.exports = new AccountController();
  