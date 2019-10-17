# Building a Game With Unity

Download the game on android:
<a href='https://play.google.com/store/apps/details?id=com.FourthMouse.HailBounce'>
<img src='/posts/images/PlayStore.png' alt="Play Store Download" width="300"/>
</a>

- [Building a Game With Unity](#Building-a-Game-With-Unity)
  - [Intro](#Intro)
  - [Required hardware](#Required-hardware)
    - [Phone](#Phone)
    - [Desktop](#Desktop)
  - [Downloading and installing unity](#Downloading-and-installing-unity)
  - [Following a tutorial to get started with Unity](#Following-a-tutorial-to-get-started-with-Unity)
  - [Generating ideas for a game](#Generating-ideas-for-a-game)
  - [Adapting the Code from the Tutorial](#Adapting-the-Code-from-the-Tutorial)
    - [Changes in Mechanics](#Changes-in-Mechanics)
    - [Spawning Clouds (used to be pipes)](#Spawning-Clouds-used-to-be-pipes)
  - [Finding Assets to Use](#Finding-Assets-to-Use)
  - [Debugging Android](#Debugging-Android)
  - [Building Android](#Building-Android)
    - [Extracting the .apk (optional)](#Extracting-the-apk-optional)
  - [Serving Ads with AdMob](#Serving-Ads-with-AdMob)
  - [Adding analytics to the game](#Adding-analytics-to-the-game)
  - [Creating a Privacy Policy](#Creating-a-Privacy-Policy)
  - [Publishing the app to the android play store](#Publishing-the-app-to-the-android-play-store)
  - [Future Improvements](#Future-Improvements)

## Intro

I wanted to build a game for a while, when I found that unity supported cross platform builds I was intrigued enough to explore it and create a small game. Little did I know I would be running into all kinds of things not really relating to development, but more just configuration. The result of this coding adventure is [Hail Bounce](https://play.google.com/store/apps/details?id=com.FourthMouse.HailBounce), feel free to download it and let me know what you think.

Hopefully this post will explain all of the steps to build a game with unity and launch it on the android play store. I will be looking into an iOS release in the future but I do not have a developer profile setup with them so publishing there would be a bit more lengthy unfortunately. I also did not have an account for developing android apps but the process to apply there is basically just paying \$25 as I will explain later.

## Required hardware

A computer with maybe 2 cores and 4 gb of ram, seriously the requirements are pretty low for game development depending on what you're doing it really won't matter what your specs are as long as you are willing to wait a bit for compilations. For more details specs on what unity actually requires check them out [here](https://unity3d.com/unity/system-requirements).

My hardware is as follows:

### Phone

OnePlus 6T running Android 9

### Desktop

CPU: i5-6400
RAM: 16 GB
GPU: gtx 1060 6GB

## Downloading and installing unity

Download the unity hub [here](https://unity3d.com/get-unity/download). Once the download and install is complete, there is a section for installs. Be sure to select the appropriate version. The first one in the list is not the one you want, make sure you select a version with the letter f for final in it. The a version is alpha, and the b version is beta which are somewhat unstable. The most recent final release at the time of writing is `Unity 2019.1.8.f1`.

Make sure you select Android Build Support and the nested Android SDK and NDK Tools which we will go into later. Feel free to select any other platforms you might be interested in building your game for, I won't go into those in this post since I haven't gotten there yet.

This is one of the largest mistakes that I made with this project unfortunately. I downloaded the alpha version of unity and was using that to create this game. I still do not have the stable version working, the versions are unfortunately not backwards compatible and when attempting to import the project into a lower version, the scene would not import so I am basically stuck on the newest version waiting for them to resolve a few issues. This was a reminder to always use version control when updating unity versions since you can't downgrade easily.

## Following a tutorial to get started with Unity

Unity has some pretty great [resources](https://learn.unity.com/) available free of charge for actually learning how to use their products. I found this one for creating a clone of flappy bird that I thought would be fairly simple to implement and it did not take me more than a day to complete everything for this tutorial and all of the modifications for adapting what I learned in the tutorial for creating the game that I made. If you are curious which one I used, feel free to check it out [here](https://learn.unity.com/tutorial/live-session-making-a-flappy-bird-style-game).

## Generating ideas for a game

In general for me, I come up with ideas while I am working on something so normally it just works out if I start following a tutorial or get something basic started. I started playing around with the assets and made them have collisions for getting points instead of going through the area, this is what sparked my idea for the current game.

While following the tutorial I thought it would be interesting to create a variant with a hail ball that had to go through clouds to grow and ultimately you could watch the giant ball go plummeting to the ground and smash a car or something. I started with a more simple version of just having the ball collide with the clouds and give the user points to get a high score.

## Adapting the Code from the Tutorial

If you follow the tutorial then this section would most likely make a bit more sense.

### Changes in Mechanics

I wanted to make it different than just flying through some zone to score, so I made it collision based and created clouds instead of flying through the pipes.

Clouds needed some collision, I created a new object and added this simple script on a new cloud object.

```C#

void OnCollisionEnter2D(Collision2D other)
{
    this.gameObject.SetActive(false);
}
```

I removed the bird flapping animations it looked a bit plain so I also made the object rotate on impact.

```c#

void OnCollisionEnter2D(Collision2D other)
{
    if (other.collider.GetComponent<Cloud>() != null)
    {
        GameControl.instance.HailScored();
        rb2d.MoveRotation(10);
        return;
    }

    this.OnDeath();
}
```

I thought it would be a bit more difficult if the game sped up over time. The scroll speed is the speed of the background and the clouds which is moving to the left (negative). I changed that by subtracting a set amount when the user scored:

```c#

public void HailScored()
{
    ...
    scrollSpeed -= scrollSpeedIncreaseOnImpact;
    ...
}
```

### Spawning Clouds (used to be pipes)

I used the same spawning pool pattern that was used for the pipes in the tutorial, I added some extra parameters to make the clouds a bit more interesting. I added a rate for spawning the clouds, and also had to make it inactive if the user interacted with it so I needed to re-activate it when it spawned again. I also needed to add a rate for spawning the clouds since the rate of speed increases while the user plays the game.

This was the code from the tutorial for spawning the pipes:

```c#

using UnityEngine;
using System.Collections;

public class ColumnPool : MonoBehaviour
{
    public GameObject columnPrefab;                                    //The column game object.
    public int columnPoolSize = 5;                                    //How many columns to keep on standby.
    public float spawnRate = 3f;                                    //How quickly columns spawn.
    public float columnMin = -1f;                                    //Minimum y value of the column position.
    public float columnMax = 3.5f;                                    //Maximum y value of the column position.

    private GameObject[] columns;                                    //Collection of pooled columns.
    private int currentColumn = 0;                                    //Index of the current column in the collection.

    private Vector2 objectPoolPosition = new Vector2 (-15,-25);        //A holding position for our unused columns offscreen.
    private float spawnXPosition = 10f;

    private float timeSinceLastSpawned;


    void Start()
    {
        timeSinceLastSpawned = 0f;

        //Initialize the columns collection.
        columns = new GameObject[columnPoolSize];
        //Loop through the collection...
        for(int i = 0; i < columnPoolSize; i++)
        {
            //...and create the individual columns.
            columns[i] = (GameObject)Instantiate(columnPrefab, objectPoolPosition, Quaternion.identity);
        }
    }


    //This spawns columns as long as the game is not over.
    void Update()
    {
        timeSinceLastSpawned += Time.deltaTime;

        if (GameControl.instance.gameOver == false && timeSinceLastSpawned >= spawnRate)
        {
            timeSinceLastSpawned = 0f;

            //Set a random y position for the column
            float spawnYPosition = Random.Range(columnMin, columnMax);

            //...then set the current column to that position.
            columns[currentColumn].transform.position = new Vector2(spawnXPosition, spawnYPosition);

            //Increase the value of currentColumn. If the new size is too big, set it back to zero
            currentColumn ++;

            if (currentColumn >= columnPoolSize)
            {
                currentColumn = 0;
            }
        }
    }
}
```

This is the code that I ended up with after my modifications for the cloud pool:

```c#

using UnityEngine;
using System.Collections;

public class CloudPool : MonoBehaviour
{
    public GameObject cloudPrefab;                                  //The cloud game object.
    public int cloudPoolSize = 5;                                   //How many clouds to keep on standby.
    public float initialCloudSpawnRate = 3f;                               //How quickly clouds spawn.
    public float cloudSpawnRate;
    public float cloudMin = -1f;                                    //Minimum y value of the cloud position.
    public float cloudMax = 3.5f;                                   //Maximum y value of the cloud position.
    public float spawnXPosMax = 8f;
    public float spawnXPosMin = -4f;
    private GameObject[] clouds;                                    //Collection of pooled clouds.
    private int currentCloud = 0;                                   //Index of the current cloud in the collection.
    private Vector2 objectPoolPosition = new Vector2(-15, -25);     //A holding position for our unused clouds offscreen.
    private float spawnXPosition = 10f;
    private float timeSinceLastSpawned;

    void Start()
    {
        cloudSpawnRate = initialCloudSpawnRate;
        timeSinceLastSpawned = cloudSpawnRate;

        //Initialize the clouds collection.
        clouds = new GameObject[cloudPoolSize];

        //Loop through the collection
        for (int i = 0; i < cloudPoolSize; i++)
        {
            //and create the individual clouds.
            clouds[i] = (GameObject)Instantiate(cloudPrefab, objectPoolPosition, Quaternion.identity);
        }

        Update();
    }

    //This spawns clouds as long as the game is not over.
    void Update()
    {
        timeSinceLastSpawned += Time.deltaTime;

        if (GameControl.instance.gameOver == false && timeSinceLastSpawned >= cloudSpawnRate)
        {
            cloudSpawnRate = initialCloudSpawnRate / System.Math.Abs(GameControl.instance.scrollSpeed);
            timeSinceLastSpawned = 0f;

            //Set a random y position for the cloud
            float spawnYPosition = Random.Range(cloudMin, cloudMax);
            spawnXPosition = Random.Range(spawnXPosMin, spawnXPosMax);

            //then set the current cloud to that position.
            clouds[currentCloud].gameObject.SetActive(true);
            clouds[currentCloud].transform.position = new Vector2(spawnXPosition, spawnYPosition);

            //Increase the value of currentCloud. If the new size is too big, set it back to zero
            currentCloud++;
            if (currentCloud >= cloudPoolSize)
            {
                currentCloud = 0;
            }
        }
    }
}
```

## Finding Assets to Use

The [unity asset store](https://assetstore.unity.com/) is a great place to publish your own content to have others use it and/or pay you for it, but it is also a great resource for inspiration or saving you from spending time making tons of assets.

I found [this one](https://assetstore.unity.com/packages/2d/gui/icons/105-colorful-2d-planet-icons-71084) for the hail ball.

[This](https://assetstore.unity.com/packages/2d/environments/free-platform-game-assets-85838) is the one I used for the background and the clouds.

## Debugging Android

1. Connect your phone to your computer and make sure the phone is set to debug mode. See instructions [here](https://developer.android.com/studio/debug/dev-options) if you are not sure how to do that.
2. Locate the SDK (this is installed by unity by default). `Edit -> Preferences -> External Tools -> Android` In the android section, if the checkmark for "Android SDK Tools Installed with Unity (recommended)" is selected, then your SDK will be located somewhere similar to time: `C:/Program Files/Unity/Hub/Editor/2019.3.0a6/Editor/Data/PlaybackEngines/AndroidPlayer/SDK`
3. Navigate to the SDK and locate the "monitor.bat" file and run it, this will open the android device monitor which we can use to see the logs from the application we are creating.

## Building Android

With unity the process here is pretty easy fortunately. Most of this is not required unless you actually want to publish your game on the android play store, which I will get into later. Here is what you need to do for setting up the android build:

1. There are some things you will want to configure before publishing the app to the store which can be found in `file -> build settings`.
1. After selecting Android from the list of platforms, click switch platform if it is not already selected.
1. Select `Plyer Settings` and go through all of the items on the right. At a minimum, fill in the Company Name, Product name, and the package name under `Other Settings`.
1. After you are done with those settings, close the player settings and under the previous screen, `Build Settings`, to the right of `Run Settings`, select your device, if you do not see it immediately then click refresh.
1. Click build and run.

The build will output a file with the `.aab` extension. This is useful later when we will publish it to the play store. If you want to extract the `.apk` manually you can do that.

### Extracting the .apk (optional)

This portion is not necessary, but you can have some friends try it out if they know how to manually install .apk files on their device, they will need to allow installs from outside sources on their device before attempting to install it though.

1. Go to the location where you saved the `.aab` file from the previous build
1. You can run bundletool.jar which is used to manipulate app bundles. You can download it here.
1. Run the tool in command line via java `java -jar bundletool.jar build-apks --bundle=<YOUR_AP_BUNDLE_NAME>.aab --output=<YOUR_AP_BUNDLE_NAME>.apks`
1. This will create a `.apks` bundle which contains the apk you can install on other devices. Open the .apks archive with some archive explorer, I prefer [7zip](https://www.7-zip.org/download.html). You will find the apk in the standalones folder named `standalone-armeabi_v7a.apk`.

## Serving Ads with AdMob

Sign up for an AdMob account through google. If you do not have an account already setup it could take several weeks for the ads to actually show up. You can follow [this guide](https://developers.google.com/admob/unity/start) for setting up unity to use the AdMob SDK. And follow [this guide](https://developers.google.com/admob/unity/banner) for adding the banner.

Make sure to add your device as a test device. Follow [this guide](https://developers.google.com/admob/unity/test-ads#enable_test_devices) so you don't get banned from AdMob.

Attach the Ads script to the Main Camera object in unity, this is the script I am using for ads:

```c#

using UnityEngine;
using GoogleMobileAds.Api;

public class Ads : MonoBehaviour
{
    private BannerView bannerView;
    public void Start()
    {
        this.InitializeBanner();
        this.RequestBanner();
    }

    private void InitializeBanner()
    {
#if UNITY_ANDROID
        string appId = "ca-app-pub-XXXXXXXXXXXX~XXXXXXXXXXXX";
#elif UNITY_IPHONE
        string appId = "ca-app-pub-XXXXXXXXXXXX~XXXXXXXXXXXX";
#else
        string appId = "unexpected_platform";
#endif

        // Initialize the Google Mobile Ads SDK.
        MobileAds.Initialize(appId);
    }

    private void RequestBanner()
    {
        // Prod Ads
#if UNITY_ANDROID
        string adUnitId = "ca-app-pub-XXXXXXXXXXXX/XXXXXXXXXXXX";
#elif UNITY_IPHONE
        string adUnitId = "ca-app-pub-XXXXXXXXXXXX/XXXXXXXXXXXX";
#else
        string adUnitId = "unexpected_platform";
#endif

        // Test Ads
        // test device XXXXXXXXXXXX
        // #if UNITY_ANDROID
        //         string adUnitId = "ca-app-pub-XXXXXXXXXXXX/XXXXXXXXXXXX";
        // #elif UNITY_IPHONE
        //                 string adUnitId = "ca-app-pub-XXXXXXXXXXXX/XXXXXXXXXXXX";
        // #else
        //                 string adUnitId = "unexpected_platform";
        // #endif

        // Clean up banner ad before creating a new one.
        if (this.bannerView != null)
        {
            this.bannerView.Destroy();
        }

        this.bannerView = new BannerView(adUnitId, AdSize.Banner, AdPosition.Bottom);

        // Create an empty ad request.
        AdRequest request = new AdRequest.Builder()
        // .AddTestDevice("XXXXXXXXXXXX")
        .Build();

        // Load the banner with the request.
        this.bannerView.LoadAd(request);
        this.bannerView.Show();
    }
}

```

## Adding analytics to the game

I watched [this video](https://www.youtube.com/watch?v=uj6rs3HFg5o) for an overview of adding firebase analytics to the game. [This guide](https://firebase.google.com/docs/analytics/unity/start) was pretty good for getting started with logging different events.

## Creating a Privacy Policy

The only thing which was somewhat terrifying was the privacy policy since I am not a lawyer. I do not take any responsibility for these actions, your actions are your own, please cross reference stuff and be sure to investigate this on your own. I am not liable for any actions you take based what I have done in this tutorial. That said, I found a website that I used to create a privacy policy for the app which seems pretty good, you can create your own [here](https://app-privacy-policy-generator.firebaseapp.com/).

## Publishing the app to the android play store

Sign up for the google play developer console to publish your app [here](https://play.google.com/apps/publish). The process is fairly straight forward, you basically just pay \$25 and then fill out the application. After your account is created then create a new application.

## Future Improvements

There are a lot of things on the list for the future if I decide to implement them later:

1. add increasing size to the hail ball
1. adding a screen at the end for results
1. making the app not be full screen probably would be a good idea
1. add animations for getting a cloud and crashing to the ground
1. create an initial screen for the user to see socials, the title, and their high score before the game starts
