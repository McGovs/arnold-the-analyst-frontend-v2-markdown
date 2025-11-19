# GA4 Analytics Assistant with n8n and BigQuery Integration

A production-ready chatbot interface that connects to n8n workflows for BigQuery data analysis. Features advanced timeout handling, session management, and embeddable components. 

## Features

### 🤖 AI-Powered Analytics 
- Natural language queries for BigQuery data
- Intelligent responses via n8n workflow integration
- Real-time data analysis and insights

### ⏱️ Advanced Timeout Management
- **5-minute timeout** for complex BigQuery operations
- **AbortController** for proper request cancellation
- **Keepalive requests** that survive tab switching
- **Visual progress indicators** with elapsed time tracking

### 🔄 Smart Session Management
- **Session-based chat history** using sessionStorage
- **Automatic cleanup** when browser tab closes
- **Persistent within session** across page refreshes
- **Unique session IDs** for tracking individual conversations

### 🎨 Production-Ready UI
- **Responsive design** for all screen sizes
- **Embeddable widget** for any website
- **Connection status indicators**
- **Enhanced loading states** with time estimates
- **Apple-level design aesthetics**

## Quick Start

1. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Add your n8n webhook URL
   VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Usage

### Standalone Chat Interface
Navigate to the main chat interface to interact with Alex The Analyst in a full-screen experience.

### Embeddable Widget
The chatbot can be embedded on any website as a floating widget. See the "Embed Demo" page for implementation examples.

### Example Queries
- "What were our top selling products last month?"
- "Show me customer growth trends"
- "What's the average order value by region?"
- "How did our conversion rates change over time?"

## Technical Architecture

### Timeout Handling
- **5-minute fetch timeout** accommodates complex BigQuery operations
- **AbortController** enables clean request cancellation
- **Keepalive option** maintains connections during tab switches
- **Progressive loading messages** keep users informed

### Session Management
- **sessionStorage** ensures history clears when tab closes
- **Session lifecycle events** handle cleanup automatically
- **Unique session IDs** track individual conversations
- **Activity tracking** maintains session validity

### Error Handling
- **Specific timeout messages** explain 5-minute processing limits
- **Connection status indicators** show real-time connectivity
- **User-friendly error messages** with actionable advice
- **Graceful degradation** for network issues

## Configuration

### Environment Variables
```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

### Customization Options
```typescript
// Embeddable widget configuration
<EmbeddableChatbot 
  title="Your Custom Title"
  placeholder="Ask your custom question..."
  position="bottom-right" // bottom-left, top-right, top-left
/>
```

## Data Source
The chatbot analyzes publicly available Google Merchant Store data covering November 1st 2020 to January 31st 2021, providing realistic analytics scenarios for demonstration.

## Browser Compatibility
- Modern browsers with ES2020+ support
- sessionStorage API required
- AbortController API required (available in all modern browsers)

## Performance Considerations
- **Optimized for long-running queries** up to 5 minutes
- **Memory efficient** session storage management
- **Network resilient** with proper error recovery
- **Tab-switching friendly** with keepalive requests

## Deployment
Built with Vite for optimal production performance. Deploy to any static hosting provider or integrate into existing applications.
