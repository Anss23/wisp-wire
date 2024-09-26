import express from 'express';
import * as chatMessageController from './controllers/chat-message-controller';

const router = express.Router();

router.get('/apple', chatMessageController.getApple);
router.post('/', chatMessageController.createItem);
router.patch('/:id', chatMessageController.updateItem);
router.delete('/:id', chatMessageController.deleteItem);

export default router;