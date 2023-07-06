package chatbox.springboot.dto;

import java.util.ArrayList;
import lombok.Data;

/**
 * Represents a request to the ChatGPT API.
 */
@Data
public class ChatGPTRequest {
    private String model;
    private ArrayList<Message> messages;

    /**
     * Create a new Request with the given model and user prompt.
     * 
     * @param model  ChatGPT model type. Ex: Gpt-3.5-turbo.
     * @param prompt The initial message prompt for the chat.
     */
    public ChatGPTRequest(String model, String prompt) {
        this.model = model;
        this.messages = new ArrayList<>();
        this.messages.add(new Message("user", prompt));
    }

}
