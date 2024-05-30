package org.example.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.quicksight.AmazonQuickSight;
import com.amazonaws.services.quicksight.AmazonQuickSightClientBuilder;
import com.amazonaws.services.quicksight.model.*;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class QuickSightService {

    private String accessKey = "XXXXXXXXXX";
    private String secretKey = "XXXXXXXXXX";

    private String accountId = "XXXXXXXXXXXX";
    private String userArn = "arn:aws:quicksight:us-east-1:1234567890:user/default/";
    private List<String> allowedDomains = Arrays.asList("");

    private String initialPath = "/start";
    private String dashboardId = "de637e30-699b-426f-bd9d-095de3eb5943";

    private final AmazonQuickSight quickSightClient;

    public QuickSightService() {
//        this.quickSightClient = AmazonQuickSightClientBuilder
//                .standard()
//                .withRegion(Regions.US_EAST_1.getName())
//                .withCredentials(new AWSCredentialsProvider() {
//                                     @Override
//                                     public AWSCredentials getCredentials() {
//                                         return new BasicAWSCredentials(accessKey, secretKey);
//                                     }
//                                     @Override
//                                     public void refresh() {
//                                     }
//                                 }
//                ).build();

        this.quickSightClient = AmazonQuickSightClientBuilder.standard().build();


    }

    public String getQuickSightConsoleEmbedUrl(String userName) throws Exception {
        final RegisteredUserEmbeddingExperienceConfiguration experienceConfiguration = new RegisteredUserEmbeddingExperienceConfiguration()
                .withQuickSightConsole(new RegisteredUserQuickSightConsoleEmbeddingConfiguration().withInitialPath(initialPath));
        final GenerateEmbedUrlForRegisteredUserRequest generateEmbedUrlForRegisteredUserRequest = new GenerateEmbedUrlForRegisteredUserRequest();
        generateEmbedUrlForRegisteredUserRequest.setAwsAccountId(accountId);
        generateEmbedUrlForRegisteredUserRequest.setUserArn(userArn+userName);
//        generateEmbedUrlForRegisteredUserRequest.setAllowedDomains(allowedDomains);
        generateEmbedUrlForRegisteredUserRequest.setExperienceConfiguration(experienceConfiguration);

        final GenerateEmbedUrlForRegisteredUserResult generateEmbedUrlForRegisteredUserResult = quickSightClient.generateEmbedUrlForRegisteredUser(generateEmbedUrlForRegisteredUserRequest);

        return generateEmbedUrlForRegisteredUserResult.getEmbedUrl();
    }

    public String getQuickSightAnalyticsEmbedUrl(String dashboardName, String userName) throws Exception {

        //TODO fetch dashboardId based on the dashBoardName from a configuration
        final RegisteredUserEmbeddingExperienceConfiguration experienceConfiguration = new RegisteredUserEmbeddingExperienceConfiguration()
                .withDashboard(new RegisteredUserDashboardEmbeddingConfiguration().withInitialDashboardId(dashboardId));
        final GenerateEmbedUrlForRegisteredUserRequest generateEmbedUrlForRegisteredUserRequest = new GenerateEmbedUrlForRegisteredUserRequest();
        generateEmbedUrlForRegisteredUserRequest.setAwsAccountId(accountId);
        generateEmbedUrlForRegisteredUserRequest.setUserArn(userArn+userName);
        generateEmbedUrlForRegisteredUserRequest.setExperienceConfiguration(experienceConfiguration);

        final GenerateEmbedUrlForRegisteredUserResult generateEmbedUrlForRegisteredUserResult = quickSightClient.generateEmbedUrlForRegisteredUser(generateEmbedUrlForRegisteredUserRequest);

        return generateEmbedUrlForRegisteredUserResult.getEmbedUrl();

    }


    public void getQuickSightUsers() {

    }
}
