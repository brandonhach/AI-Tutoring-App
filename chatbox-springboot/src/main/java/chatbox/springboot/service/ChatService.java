package chatbox.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import chatbox.springboot.dto.ChatGPTRequest;
import chatbox.springboot.dto.ChatGPTResponse;

@Service
public class ChatService {
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

    public String chat(String prompt) {
        ChatGPTRequest request = new ChatGPTRequest(model, prompt);
        ChatGPTResponse chatGPTResponse = template.postForObject(apiURL, request, ChatGPTResponse.class);

        if (chatGPTResponse.getChoices().isEmpty()) {
            return "No response from bot";
        }

        return chatGPTResponse.getChoices().get(0).getMessage().getContent();
    }
}
