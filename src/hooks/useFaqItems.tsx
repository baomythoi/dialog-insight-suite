
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  lastUpdated?: string;
}

export const useFaqItems = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load FAQ items from backend
  const loadFaqItems = async () => {
    if (!user) {
      setFaqItems([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('faq_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedItems = data.map(item => ({
        id: item.id,
        question: item.question,
        answer: item.answer,
        category: item.category || '',
        lastUpdated: new Date(item.updated_at).toISOString().split('T')[0]
      }));

      setFaqItems(formattedItems);
    } catch (error) {
      console.error('Error loading FAQ items:', error);
      toast({
        variant: "destructive",
        title: "Lỗi tải dữ liệu",
        description: "Không thể tải danh sách FAQ"
      });
    } finally {
      setLoading(false);
    }
  };

  // Add new FAQ item
  const addFaqItem = async (item: Omit<FaqItem, 'id' | 'lastUpdated'>) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('faq_items')
        .insert({
          user_id: user.id,
          question: item.question,
          answer: item.answer,
          category: item.category
        })
        .select()
        .single();

      if (error) throw error;

      const newItem: FaqItem = {
        id: data.id,
        question: data.question,
        answer: data.answer,
        category: data.category || '',
        lastUpdated: new Date(data.updated_at).toISOString().split('T')[0]
      };

      setFaqItems(prev => [newItem, ...prev]);
      
      toast({
        title: "Thành công",
        description: "Đã thêm câu hỏi mới"
      });
    } catch (error) {
      console.error('Error adding FAQ item:', error);
      toast({
        variant: "destructive",
        title: "Lỗi thêm câu hỏi",
        description: "Không thể thêm câu hỏi mới"
      });
    }
  };

  // Update FAQ item
  const updateFaqItem = async (id: string, updates: Partial<FaqItem>) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('faq_items')
        .update({
          question: updates.question,
          answer: updates.answer,
          category: updates.category,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;

      const updatedItem: FaqItem = {
        id: data.id,
        question: data.question,
        answer: data.answer,
        category: data.category || '',
        lastUpdated: new Date(data.updated_at).toISOString().split('T')[0]
      };

      setFaqItems(prev => prev.map(item => 
        item.id === id ? updatedItem : item
      ));

      toast({
        title: "Thành công",
        description: "Đã cập nhật câu hỏi"
      });
    } catch (error) {
      console.error('Error updating FAQ item:', error);
      toast({
        variant: "destructive",
        title: "Lỗi cập nhật",
        description: "Không thể cập nhật câu hỏi"
      });
    }
  };

  // Delete FAQ item
  const deleteFaqItem = async (id: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('faq_items')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;

      setFaqItems(prev => prev.filter(item => item.id !== id));

      toast({
        title: "Thành công",
        description: "Đã xóa câu hỏi"
      });
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
      toast({
        variant: "destructive",
        title: "Lỗi xóa câu hỏi",
        description: "Không thể xóa câu hỏi"
      });
    }
  };

  // Bulk add FAQ items
  const addBulkFaqItems = async (items: Omit<FaqItem, 'id' | 'lastUpdated'>[]) => {
    if (!user || items.length === 0) return;

    try {
      const itemsToInsert = items.map(item => ({
        user_id: user.id,
        question: item.question,
        answer: item.answer,
        category: item.category
      }));

      const { data, error } = await supabase
        .from('faq_items')
        .insert(itemsToInsert)
        .select();

      if (error) throw error;

      const newItems: FaqItem[] = data.map(item => ({
        id: item.id,
        question: item.question,
        answer: item.answer,
        category: item.category || '',
        lastUpdated: new Date(item.updated_at).toISOString().split('T')[0]
      }));

      setFaqItems(prev => [...newItems, ...prev]);

      toast({
        title: "Thành công",
        description: `Đã thêm ${newItems.length} câu hỏi từ file Excel`
      });
    } catch (error) {
      console.error('Error bulk adding FAQ items:', error);
      toast({
        variant: "destructive",
        title: "Lỗi thêm file",
        description: "Không thể thêm câu hỏi từ file Excel"
      });
    }
  };

  useEffect(() => {
    loadFaqItems();
  }, [user]);

  return {
    faqItems,
    loading,
    addFaqItem,
    updateFaqItem,
    deleteFaqItem,
    addBulkFaqItems,
    refreshFaqItems: loadFaqItems
  };
};
