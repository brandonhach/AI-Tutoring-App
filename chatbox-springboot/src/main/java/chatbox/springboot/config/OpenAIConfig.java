package chatbox.springboot.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 * OpenAIConfig is a class used to configure the RestTemplate to use
 * OpenAI API key for authentication.
 */
@Configuration
public class OpenAIConfig {

    /**
     * The OpenAI API key from the application's configuration file.
     */
    @Value("${openai.api.key}")
    String openaiApiKey;

    /**
     * Define a Spring Bean for RestTemplate configured to add the OpenAI API Key as
     * a Bearer token to the "Authorization" header of every HTTP Request made.
     * 
     * NOTE:
     * Config class - A container class that contains Beans.
     * Spring Bean - Objects created and automatically managed by Spring Boot.
     * RestTemplate - A class in Spring Framework that provide convenient methods
     * for consuming webs services. HTTP request are called and Responses are
     * handled.
     * Essentially a Spring Bean makes objects for the Config Class. Those objects
     * can be used to reference each other if needed, avoiding massive cluttering.
     * 
     * @return RestTemplate
     */
    @Bean
    public RestTemplate template() {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().add("Authorization", "Bearer " + openaiApiKey);
            return execution.execute(request, body);
        });
        return restTemplate;
    }
}
