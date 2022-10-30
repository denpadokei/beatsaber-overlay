import { default as LeaderboardType } from "../consts/LeaderboardType";
import { getBeatLeaderPP } from "../curve/BeatLeaderCurve";
import { getScoreSaberPP } from "../curve/ScoreSaberCurve";

export default class Utils {
	/**
	 * Returns the information for the given website type.
	 *
	 * @param {string} website
	 * @returns The website type's information.
	 */
	static getWebsiteApi(website) {
		return LeaderboardType[website];
	}

	static openInNewTab(url) {
		window.open(url, "_blank");
	}

	static async checkLeaderboard(url, steamId) {
		const data = await fetch(url.replace("%s", steamId), {
			headers: {
				"X-Requested-With": "BeatSaber Overlay",
			},
		});
		if (data.status === 429) {
			return true; // Just assume it's true is we are rate limited
		}
		const json = await data.json();
		return !!json.pp;
	}

	static calculatePP(stars, acc, type) {
		if (stars <= 0) {
			return undefined;
		}
		if (type === "BeatLeader") {
			return getBeatLeaderPP(acc, stars);
		}
		if (type === "ScoreSaber") {
			return getScoreSaberPP(acc, stars);
		}
		return undefined;
	}

	static base64ToArrayBuffer(base64) {
		return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
	}

	static stringToBoolean = (stringValue) => {
		switch (stringValue?.toLowerCase()?.trim()) {
			case "true":
			case "yes":
			case "1":
				return true;

			case "false":
			case "no":
			case "0":
			case null:
			case undefined:
				return false;

			default:
				return JSON.parse(stringValue);
		}
	};
}
