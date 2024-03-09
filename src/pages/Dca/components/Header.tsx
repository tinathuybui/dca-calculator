import FileCopyIcon from "@mui/icons-material/FileCopy";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { FC, useState } from "react";
import style from "./Header.module.scss";

interface HeaderProps {
	handleReset: () => void;
	currentSharePrice?: number;
	initialSharePrice?: number;
	initialNoOfUnits?: number;
	initialPurchaseAmount?: number;
	additionalInvestment?: number;
	additionalNoOfUnits?: number;
}

const Header: FC<HeaderProps> = ({
	handleReset,
	currentSharePrice = 0,
	initialSharePrice = 0,
	initialNoOfUnits = 0,
	initialPurchaseAmount = 0,
	additionalInvestment = 0,
	additionalNoOfUnits = 0,
}) => {
	const [isShareModalOpen, setShareModalOpen] = useState(false);

	const handleShare = () => {
		setShareModalOpen(true);
	};

	const handleCloseShareModal = () => {
		setShareModalOpen(false);
	};

	const handleCopyToClipboard = () => {
		const baseUrl = window.location.origin;

		const params = new URLSearchParams({
			isp: initialSharePrice?.toString() || "0",
			inou: initialNoOfUnits?.toString() || "0",
			ipa: initialPurchaseAmount?.toString() || "0",
			csp: currentSharePrice?.toString() || "0",
			ai: additionalInvestment?.toString() || "0",
			anu: additionalNoOfUnits?.toString() || "0",
		});

		const shareUrl = `${baseUrl}/?${params.toString()}`;
		navigator.clipboard
			.writeText(shareUrl)
			.then(() => {
				alert("URL copied to clipboard!");
			})
			.catch((error) => {
				console.error("Error copying to clipboard:", error);
			});

		handleCloseShareModal();
	};

	const handleShareOnWhatsApp = () => {
		const baseUrl = window.location.origin;

		const params = new URLSearchParams({
			isp: initialSharePrice?.toString() || "0",
			inou: initialNoOfUnits?.toString() || "0",
			ipa: initialPurchaseAmount?.toString() || "0",
			csp: currentSharePrice?.toString() || "0",
			ai: additionalInvestment?.toString() || "0",
			anu: additionalNoOfUnits?.toString() || "0",
		});

		const shareUrl = `${baseUrl}/?${params.toString()}`;

		const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
			shareUrl
		)}`;

		window.open(whatsappLink, "_blank");

		handleCloseShareModal();
	};

	return (
		<div className={style.header}>
			<Typography variant="h4" align="left" gutterBottom>
				Dollar Cost Average Calculator
			</Typography>

			<div>
				<Button onClick={handleReset}>
					<RefreshIcon />
				</Button>
				<Button onClick={handleShare}>
					<ShareIcon />
				</Button>
			</div>

			<Dialog open={isShareModalOpen} onClose={handleCloseShareModal}>
				<DialogContent>
					<Typography variant="h6" gutterBottom>
						Share options
					</Typography>
					<Button
						variant="contained"
						color="primary"
						startIcon={<WhatsAppIcon />}
						onClick={handleShareOnWhatsApp}
					>
						WhatsApp
					</Button>
					<Button
						variant="contained"
						color="primary"
						startIcon={<FileCopyIcon />}
						onClick={handleCopyToClipboard}
					>
						Copy URL
					</Button>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Header;
