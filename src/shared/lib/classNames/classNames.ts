type Mods = Record<string, boolean>;

export function classNames(cls: string, mods: Mods = {}, additionals: string[] = []): string {

	return [
		cls,
		...additionals.filter(Boolean),
		...Object.entries(mods)
			.filter(([, value]) => Boolean(value))
			.map(([className,]) => className)
	].join(' ');
}