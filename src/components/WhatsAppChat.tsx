import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const whatsappNumber = '+919124846864';
  
  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          style={{ backgroundColor: '#25D366' }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border z-50 overflow-hidden">
          {/* Header */}
          <div 
            className="p-4 text-white flex items-center justify-between"
            style={{ backgroundColor: '#075E54' }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Maheshwari College</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-gray-50 min-h-[200px]">
            {/* Welcome Message */}
            <div className="bg-white rounded-lg p-3 shadow-sm mb-4 relative">
              <p className="text-sm text-gray-800">How can I help you? 😊</p>
              <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-100 flex items-center space-x-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border-0 bg-white rounded-full px-4 py-2 focus:ring-0 text-sm"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-10 h-10 rounded-full p-0 disabled:opacity-50"
              style={{ backgroundColor: '#25D366' }}
            >
              <Send className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;