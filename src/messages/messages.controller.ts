import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  
    constructor(public messagesService: MessagesService) {}
    @Get()
    listMessages(){
     const messages = this.messagesService.findAll()
      console.log("list messages",messages);
      return messages
    }
    @Post()
    createMessage(@Body() body: CreateMessageDTO){
      console.log("body",body)
      return this.messagesService.create(body?.content)
    }
    @Get(":id")
    getMessage(@Param("id") id:string){
        console.log("get message by id", id)
        return this.messagesService.findOne(id)
    }
}
