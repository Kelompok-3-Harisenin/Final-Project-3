const User = require('../models/user');

// Fungsi pendaftaran pengguna baru
exports.register = async (req,res) => {
    try {
        const { name, email, password } = req.body;

// Periksa apakah pengguna sudah terdaftar sebelumnya
const existingUser = await User.findOne({ email });
if (existingUser) {
  return res.status(400).json({ error: 'Email already exists' });
}

// Buat pengguna baru
const user = new User({ name, email, password });
await user.save();

res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
res.status(500).json({ error: 'Internal server error' });
}
};

// Fungsi otentikasi pengguna
exports.login = async (req, res) => {
try {
const { email, password } = req.body;

// Periksa apakah pengguna terdaftar
const user = await User.findOne({ email });
if (!user) {
  return res.status(404).json({ error: 'User not found' });
}

// Periksa kecocokan kata sandi
const isMatch = await user.comparePassword(password);
if (!isMatch) {
  return res.status(401).json({ error: 'Invalid password' });
}

// Generate token otentikasi
const token = generateAuthToken(user);

res.status(200).json({ token });
} catch (error) {
res.status(500).json({ error: 'Internal server error' });
}
};

// Fungsi untuk mengambil profil pengguna
exports.profile = async (req, res) => {
try {
const userId = req.user.id;

// Cari pengguna berdasarkan ID
const user = await User.findById(userId);

res.status(200).json(user);
} catch (error) {
res.status(500).json({ error: 'Internal server error' });
}
};

// Fungsi untuk memperbarui profil pengguna
exports.updateProfile = async (req, res) => {
try {
const userId = req.user.id;
const { name, email } = req.body;

// Perbarui data pengguna
await User.findByIdAndUpdate(userId, { name, email });

res.status(200).json({ message: 'Profile updated successfully' });
} catch (error) {
res.status(500).json({ error: 'Internal server error' });
}
};

// Fungsi untuk memulihkan kata sandi
exports.forgotPassword = async (req, res) => {
try {
const { email } = req.body;

// Cari pengguna berdasarkan email
const user = await User.findOne({ email });
if (!user) {
  return res.status(404).json({ error: 'User not found' });
}

// Generate token untuk pemulihan kata sandi
const token = generatePasswordResetToken();

// Simpan token dan tanggal kedaluwarsa di database pengguna
user.resetPasswordToken = token;
user.resetPasswordExpires = Date.now() + 3600000; // Token berlaku selama 1 jam
await user.save();

// Kirim email dengan tautan reset password menggunakan token

res.status(200).json({ message: 'Password reset link sent successfully' });
} catch (error) {
res.status(500).json({ error: 'Internal server error' });
}
};

// Fungsi untuk mengatur ulang kata sandi
exports.resetPassword = async (req, res) => {
try {
const { token } = req.params;
const { password } = req.body;

// Cari pengguna berdasarkan token reset password
const user = await User.findOne({
  resetPasswordToken: token,
  resetPasswordExpires: { $gt: Date.now() },
});

if (!user) {
  return res.status(400).json({ error: 'Invalid or expired token' });
}

// Atur ulang kata sandi
user.password = password;
user.resetPasswordToken = undefined;
user.resetPasswordExpires = undefined;
await user.save();

res.status(200).json({ message: 'Password reset successfully' });
} catch (error) {
res.status(500).json({ error: 'Internal server error' });
}
};