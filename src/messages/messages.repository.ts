import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    // readfile and return requested id record
    const repoMessages = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(repoMessages);
    return messages[id];
  }
  async findAll() {
    // readfile and return all records
    const repoMessages = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(repoMessages);
    return messages;
  }
  async create(content: string) {
    //readfile, append new record
    const repoMessages = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(repoMessages);
    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      content,
    };
    return await writeFile("messages.json",JSON.stringify(messages))
  }
}
