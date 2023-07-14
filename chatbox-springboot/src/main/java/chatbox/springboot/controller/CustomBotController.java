package chatbox.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import chatbox.springboot.service.ChatService;

/**
 * A controller that manages interaction with our custom ChatGPT bot.
 * Accepts cross-origin request from localhost
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bot")
public class CustomBotController {

    @Autowired
    private ChatService chatService;

    /**
     * Processes a GET Request for the chat with the bot.
     * 
     * @param prompt The prompt for the chat.
     * @return String The content from the first message created by the bot.
     */
    @GetMapping("/chat")
    public String chat(@RequestParam("prompt") String prompt) {
        String response = chatService.chat(prompt);
        return response;
    }
}
