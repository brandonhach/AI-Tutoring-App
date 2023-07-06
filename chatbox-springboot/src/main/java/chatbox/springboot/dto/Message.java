package chatbox.springboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a message in a conversion.
 * Each message has a role (user, assitant, etc.) and content (the actual text
 * of the message).
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private String role, content;
}
