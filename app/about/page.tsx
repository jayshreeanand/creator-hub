"use client";

import BasicCard from "@/components/basic-card";
import RenderObject from "@/components/render-object";
import { Button } from "@/components/ui/button";
import { useEthersSigner } from "@/lib/get-signer";
import { getExplorerUrl } from "@/lib/utils";
import { siteConfig } from "@/util/site-config";
import Link from "next/link";
import { useState } from "react";
import { Chain } from "viem";
import { useChainId, useChains } from "wagmi";

const About = () => {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<any>(null);

	const chainId = useChainId();
	const chains = useChains();
	const currentChain: Chain | undefined = (chains || []).find((c) => c.id === chainId);

	const signer = useEthersSigner();

	return (
		<div className="flex flex-row items-center justify-center mt-8">
			<BasicCard
				title="About CreatorHub"
				description="Learn more about CreatorHub and how it works."
				className="max-w-[1000px] p-4"
			>
				{siteConfig.about.map((section, index) => (
					<div key={index} className="mt-4">
						<h3 className="text-lg font-bold">{section.title}</h3>
						<div>{section.description}</div>
					</div>
				))}

				<br />

				<Link
					target="_blank"
					className="text-blue-500 hover:underline"
					href="https://explorer.creatorchain.io/address/0x9F5F1fc029754A85B6FA891A0BC71fe1e26DfC1A"
				>
					View master contract on Creator Testnet explorer
				</Link>

				{/* <Button
                    onClick={getSchemaId}
                    disabled={loading}
                    className="mt-3"
                >
                    {loading && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Get Schema ID
                </Button> */}

				{result && (
					<div className="my-2">
						<RenderObject title="Result" obj={result} />
					</div>
				)}
			</BasicCard>
		</div>
	);
};
export default About;
