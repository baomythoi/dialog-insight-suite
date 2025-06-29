import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const {
    signIn,
    signUp,
    signInWithGoogle,
    signInWithFacebook
  } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert('Mật khẩu không khớp');
          return;
        }
        await signUp(formData.email, formData.password, formData.name);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setLoading(true);
    try {
      await signInWithFacebook();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex flex-col items-center justify-center p-4">
      {/* Logo Section */}
      <div className="mb-8">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/7e285b94-c226-4703-b0a3-d7c518b47094.png" 
            alt="AIGEN Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className="text-3xl font-bold text-primary">AIGEN</span>
        </Link>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {isLogin ? 'Đăng nhập vào tài khoản' : 'Tạo tài khoản mới'}
          </CardTitle>
          <p className="text-gray-600 text-sm">
            {isLogin ? 'Chào mừng bạn trở lại! Vui lòng đăng nhập để tiếp tục.' : 'Tạo tài khoản để bắt đầu sử dụng chatbot AI của chúng tôi.'}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && <div>
                <label className="text-sm font-medium text-gray-700">Họ và tên</label>
                <Input type="text" placeholder="Nhập họ và tên" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="mt-1" required />
              </div>}
            
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input type="email" placeholder="Nhập địa chỉ email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="mt-1" required />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Mật khẩu</label>
              <div className="relative mt-1">
                <Input type={showPassword ? 'text' : 'password'} placeholder="Nhập mật khẩu" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} className="pr-10" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            {!isLogin && <div>
                <label className="text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                <Input type="password" placeholder="Nhập lại mật khẩu" value={formData.confirmPassword} onChange={e => setFormData({
              ...formData,
              confirmPassword: e.target.value
            })} className="mt-1" required />
              </div>}
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary-600" disabled={loading}>
              {loading ? 'Đang xử lý...' : isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Hoặc</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button type="button" variant="outline" onClick={handleGoogleLogin} className="w-full" disabled={loading}>
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Đăng nhập với Google
            </Button>
            
            <Button type="button" variant="outline" onClick={handleFacebookLogin} className="w-full" disabled={loading}>
              <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Đăng nhập với Facebook
            </Button>
          </div>
          
          <div className="text-center">
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-sm text-primary hover:underline" disabled={loading}>
              {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
