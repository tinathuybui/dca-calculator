export async function fetchLatestBuyPrice(
	cointype: string,
	markettype: string
): Promise<number> {
	try {
		const response = await fetch(
			`https://www.coinspot.com.au/pubapi/v2/buyprice/${cointype}/${markettype}`
		);
		const data: { status: string; rate?: number; message?: string } =
			await response.json();

		if (data.status === "ok" && typeof data.rate === "number") {
			return data.rate; // Return the latest buy price
		} else {
			throw new Error(data.message || "Unknown error occurred");
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error fetching latest buy price:", error.message);
			throw error;
		} else {
			console.error("Unexpected error type:", error);
			throw new Error("Unknown error occurred");
		}
	}
}
