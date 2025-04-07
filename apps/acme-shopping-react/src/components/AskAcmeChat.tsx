import { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from '@mui/material';
import { Close, Send } from '@mui/icons-material';

interface AskAcmeChatProps {
    open: boolean;
    onClose: () => void;
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

export default function AskAcmeChat({ open, onClose }: AskAcmeChatProps) {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const handleSend = () => {
        if (inputMessage.trim()) {
            // Add user message
            setMessages(prev => [...prev, { role: 'user', content: inputMessage }]);
            
            // Add assistant response
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: 'Functionality to be added soon.' 
            }]);
            
            setInputMessage('');
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    m: 0,
                    width: { xs: 'vw', sm: 400 },
                    height: { xs: 'vh', sm: 500 },
                },
            }}
        >
            <DialogTitle sx={{ padding: '8px 16px', margin: 0 }}>
                <Typography sx={{ margin: 0, fontSize: '1.2rem', lineHeight: 1.2 }}>
                    Ask Acme
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ p: 1 }}>
                <List sx={{ height: 350, overflow: 'auto' }}>
                    {messages.map((message, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                            }}
                        >
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 1,
                                    maxWidth: '70%',
                                    backgroundColor: message.role === 'user' ? 'primary.light' : 'grey.200',
                                    borderRadius: message.role === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                                }}
                            >
                                <ListItemText
                                    primary={message.content}
                                    sx={{
                                        wordBreak: 'break-word',
                                        '& .MuiListItemText-primary': {
                                            color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
                                        }
                                    }}
                                />
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
                <TextField
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type a message..."
                    variant="outlined"
                    size="small"
                    sx={{ flexGrow: 1, mr: 1 }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && inputMessage.trim()) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <Button
                    variant="contained"
                    endIcon={<Send />}
                    onClick={handleSend}
                    disabled={!inputMessage.trim()}
                >
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
} 