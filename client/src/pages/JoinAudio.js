import AgoraRTC from "agora-rtc-sdk-ng";

const rtc = {
  client: null,
  localAudioTrack: null,
};

const options = {
  appId: "73b2e6173ffc4fd8bdd4ea4f60c1936c",
  token: null,
};

async function startBasicCall(channel) {
  rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
  const uid = await rtc.client.join(options.appId, channel, options.token);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  await rtc.client.publish([rtc.localAudioTrack]);

  rtc.client.on("user-published", async (user, mediaType) => {
    await rtc.client.subscribe(user, mediaType);
    console.log("subscribe success");
    if (mediaType === "audio") {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack.play();
    }
  });
}

export { rtc, startBasicCall };
