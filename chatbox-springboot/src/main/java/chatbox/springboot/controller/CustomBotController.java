package chatbox.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import chatbox.springboot.dto.ChatGPTRequest;
import chatbox.springboot.dto.ChatGPTResponse;

/**
 * A controller that manages interaction with our custom ChatGPT bot.
 */
@RestController
@RequestMapping("/bot")
public class CustomBotController {

    /**
     * OpenAI model used for the chat.
     */
    @Value("${openai.model}")
    private String model;

    /**
     * The URL for the OpenAI API.
     */
    @Value("${openai.api.url}")
    private String apiURL;

    /**
     * RestTemplate used for making request to the OpenAI API.
     */
    @Autowired
    private RestTemplate template;

    /**
     * Processes a GET Request for the chat with the bot.
     * 
     * @param prompt The prompt for the chat.
     * @return String The content from the first message created by the bot.
     */
    @GetMapping("/chat")
    public String chat(@RequestParam("prompt") String prompt) {
        ChatGPTRequest request = new ChatGPTRequest(model, prompt);
        ChatGPTResponse chatGPTResponse = template.postForObject(apiURL, request, ChatGPTResponse.class);

        if (chatGPTResponse.getChoices().isEmpty()) {
            return "No response from bot";
        }

        return chatGPTResponse.getChoices().get(0).getMessage().getContent();
    }
}
