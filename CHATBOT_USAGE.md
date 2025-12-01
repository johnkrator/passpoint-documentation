# ChatBot Widget Usage Guide

## Overview

The ChatBotWidget is a standalone, self-contained chatbot component that appears as a floating button in the bottom-right corner of your application. It provides an interactive chat interface with placeholder responses that can be easily integrated with any LLM backend.

## Features

- **Floating Widget**: Bottom-right positioned, non-intrusive button
- **Modal Chat Interface**: Opens to a full chat window with smooth animations
- **Dark Mode Support**: Automatically adapts to your application's theme
- **Accessibility**: Full ARIA labels, keyboard navigation, and focus management
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Auto-scroll**: Automatically scrolls to the latest messages
- **Typing Indicators**: Visual feedback when bot is "thinking"
- **Message Timestamps**: Shows when each message was sent

## Installation

Simply import and include the component in any page:

```tsx
import ChatBotWidget from "@/components/ChatBotWidget";

function YourPage() {
    return (
        <div>
            {/* Your page content */}
            <h1>Welcome to My Page</h1>
            <p>Your page content here...</p>
            
            {/* Add chatbot widget - that's it! */}
            <ChatBotWidget />
        </div>
    );
}
```

## Usage Examples

### Example 1: Add to App Layout (Global)

To make the chatbot available on all pages, add it to your main layout:

```tsx
// src/Layout.tsx or src/App.tsx
import ChatBotWidget from "@/components/ChatBotWidget";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
            
            {/* Chatbot will appear on all pages */}
            <ChatBotWidget />
        </div>
    );
}

export default Layout;
```

### Example 2: Add to Specific Page

To add the chatbot to a specific page only:

```tsx
// src/pages/DocumentationPage.tsx
import ChatBotWidget from "@/components/ChatBotWidget";

function DocumentationPage() {
    return (
        <div className="documentation-container">
            <h1>Documentation</h1>
            <article>
                {/* Your documentation content */}
            </article>
            
            {/* Chatbot appears only on this page */}
            <ChatBotWidget />
        </div>
    );
}

export default DocumentationPage;
```

## Keyboard Shortcuts

- **Enter**: Send message
- **Shift + Enter**: New line in message
- **ESC**: Close chat window

## Customization

### Integrating with an LLM API

The component includes a placeholder function `handleBotResponse` that you can replace with your actual AI backend:

```tsx
// Location: src/components/ChatBotWidget.tsx, line 71

const handleBotResponse = async (userMessage: string): Promise<string> => {
    try {
        // Replace this with your actual API call
        const response = await fetch('https://your-api.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                message: userMessage,
                // Add any other parameters your API needs
            })
        });
        
        const data = await response.json();
        return data.response; // Adjust based on your API response structure
        
    } catch (error) {
        console.error('Error calling AI API:', error);
        return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
};
```

### Styling Customization

The component uses Tailwind CSS classes. Key styling areas:

1. **Primary Color**: `#0099c2` (used for buttons and user messages)
   - Update lines 135-136 for floating button
   - Update line 167 for header
   - Update lines 206, 271 for send button and user messages

2. **Widget Size**: 
   - Button: `h-14 w-14` (line 134)
   - Chat window: `sm:w-96 h-[600px]` (line 158)

3. **Position**: 
   - Floating button: `bottom-6 right-6` (line 131)

## Component API

The ChatBotWidget component is designed to be used without props - it's completely self-contained. All state and logic is managed internally.

### Internal State

- `isOpen`: Controls chat window visibility
- `messages`: Array of chat messages
- `inputValue`: Current input field value
- `isTyping`: Bot typing indicator state

### Message Interface

```typescript
interface Message {
    id: string;           // Unique identifier
    text: string;         // Message content
    sender: "user" | "bot"; // Message sender
    timestamp: Date;      // When message was sent
}
```

## Accessibility Features

- **ARIA Labels**: All interactive elements have descriptive labels
- **Keyboard Navigation**: Full keyboard support (Tab, Enter, ESC)
- **Focus Management**: Auto-focus on input when chat opens
- **Screen Reader Support**: Proper semantic HTML and ARIA attributes
- **Backdrop Click**: Click outside to close

## Browser Compatibility

The component works in all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Animations

## Troubleshooting

### Widget Not Appearing

1. Ensure the component is imported correctly
2. Check that the component is rendered in your JSX
3. Verify Tailwind CSS is configured properly
4. Check z-index conflicts (widget uses z-50)

### Styling Issues

1. Ensure `@/components/ui/button` exists
2. Verify `@/lib/utils` exports the `cn` function
3. Check that Tailwind CSS classes are being processed

### Icons Not Showing

1. Verify `lucide-react` is installed: `npm install lucide-react`
2. Check that icons (MessageCircle, X, Send) are being imported

## File Location

```
src/components/ChatBotWidget.tsx
```

## Dependencies

- React 18+
- lucide-react (icons)
- @/components/ui/button (button component)
- @/lib/utils (cn utility)
- Tailwind CSS

## Next Steps

1. **Add to your application**: Import and render the component
2. **Test the interface**: Click the floating button and try sending messages
3. **Integrate your AI**: Replace the placeholder response function with your LLM API
4. **Customize styling**: Adjust colors and sizing to match your brand
5. **Monitor usage**: Add analytics to track user interactions

## Support

For issues or questions, refer to the component source code at `src/components/ChatBotWidget.tsx` or consult your development team.
