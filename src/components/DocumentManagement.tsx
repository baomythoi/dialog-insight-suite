
import React, { useState } from 'react';
import { Upload, FileText, Trash2, Edit, Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DocumentManagement = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: 'Làm thế nào để đặt hàng?',
      answer: 'Bạn có thể đặt hàng qua website hoặc gọi hotline của chúng tôi.',
      category: 'Đặt hàng',
      lastUpdated: '2024-06-15'
    },
    {
      id: 2,
      question: 'Chính sách đổi trả như thế nào?',
      answer: 'Chúng tôi hỗ trợ đổi trả trong vòng 30 ngày với điều kiện sản phẩm còn nguyên vẹn.',
      category: 'Chính sách',
      lastUpdated: '2024-06-14'
    }
  ]);

  const [scenarios, setScenarios] = useState([
    {
      id: 1,
      name: 'Quy trình đặt hàng',
      description: 'Hướng dẫn khách hàng đặt hàng từ A đến Z',
      steps: 8,
      status: 'active',
      lastUpdated: '2024-06-15'
    },
    {
      id: 2,
      name: 'Xử lý khiếu nại',
      description: 'Quy trình xử lý khiếu nại từ khách hàng',
      steps: 5,
      status: 'draft',
      lastUpdated: '2024-06-13'
    }
  ]);

  const [showFaqDialog, setShowFaqDialog] = useState(false);
  const [showScenarioDialog, setShowScenarioDialog] = useState(false);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '', category: '' });
  const [newScenario, setNewScenario] = useState({ name: '', description: '', steps: [] });

  const handleAddFaq = () => {
    if (newFaq.question && newFaq.answer) {
      setFaqItems([...faqItems, {
        id: Date.now(),
        ...newFaq,
        lastUpdated: new Date().toISOString().split('T')[0]
      }]);
      setNewFaq({ question: '', answer: '', category: '' });
      setShowFaqDialog(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Quản lý tài liệu</h1>
      
      <Tabs defaultValue="faq" className="w-full">
        <TabsList>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="scenarios">Kịch bản</TabsTrigger>
          <TabsTrigger value="upload">Tải tài liệu</TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Câu hỏi thường gặp</h2>
            <Dialog open={showFaqDialog} onOpenChange={setShowFaqDialog}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Thêm FAQ
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Thêm câu hỏi mới</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Danh mục</label>
                    <Input
                      placeholder="Ví dụ: Đặt hàng, Thanh toán..."
                      value={newFaq.category}
                      onChange={(e) => setNewFaq({...newFaq, category: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Câu hỏi</label>
                    <Input
                      placeholder="Nhập câu hỏi"
                      value={newFaq.question}
                      onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Câu trả lời</label>
                    <Textarea
                      placeholder="Nhập câu trả lời"
                      value={newFaq.answer}
                      onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <Button onClick={handleAddFaq} className="w-full bg-primary hover:bg-primary-600">
                    Thêm FAQ
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {faqItems.map((faq) => (
              <Card key={faq.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{faq.category}</Badge>
                        <span className="text-xs text-gray-500">
                          Cập nhật: {faq.lastUpdated}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Scenarios Tab */}
        <TabsContent value="scenarios" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Kịch bản hội thoại</h2>
            <Button className="bg-primary hover:bg-primary-600">
              <Plus className="w-4 h-4 mr-2" />
              Tạo kịch bản
            </Button>
          </div>

          <div className="grid gap-4">
            {scenarios.map((scenario) => (
              <Card key={scenario.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={scenario.status === 'active' ? 'default' : 'secondary'}>
                          {scenario.status === 'active' ? 'Đang hoạt động' : 'Bản nháp'}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {scenario.steps} bước • Cập nhật: {scenario.lastUpdated}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{scenario.name}</h3>
                      <p className="text-gray-600 text-sm">{scenario.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Upload Tab */}
        <TabsContent value="upload" className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Tải lên tài liệu</h2>
            
            <Card className="border-dashed border-2 border-gray-300 p-12">
              <div className="flex flex-col items-center">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Kéo thả tài liệu vào đây
                </h3>
                <p className="text-gray-600 mb-4">
                  Hỗ trợ: PDF, DOC, DOCX, TXT, CSV (Tối đa 10MB)
                </p>
                <Button className="bg-primary hover:bg-primary-600">
                  Chọn tài liệu
                </Button>
              </div>
            </Card>
          </div>

          {/* Uploaded Files */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tài liệu đã tải lên</h3>
            <div className="grid gap-3">
              {[
                { name: 'Catalog sản phẩm 2024.pdf', size: '2.4 MB', date: '15/06/2024' },
                { name: 'Chính sách bảo hành.docx', size: '1.1 MB', date: '14/06/2024' },
                { name: 'FAQ khách hàng.txt', size: '45 KB', date: '13/06/2024' }
              ].map((file, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentManagement;
