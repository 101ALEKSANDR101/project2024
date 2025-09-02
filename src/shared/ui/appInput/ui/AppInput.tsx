import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppInput.module.scss';


type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface AppInputProps extends InputHTMLProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autoFocuse?: boolean;
}

export const AppInput = memo(function AppInput(props: AppInputProps) {
	const {
		className,
		value,
		onChange,
		placeholder,
		type = 'text',
		autoFocus,
		...otherProps
	} = props;

	const [isFocuse, setIsFocuse] = useState(false);
	const [position, setPosition] = useState(0);
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (autoFocus) {
			setIsFocuse(true);
			ref.current.focus();
		}
	}, [autoFocus]);

	const onFocuse = () => {
		setIsFocuse(true);
	}

	const onBlur = () => {
		setIsFocuse(false);
	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setPosition(e?.target?.value?.length);
	}

	const onSelect = (e: any) => {
		setPosition(e?.target?.selectionStart);
	}

	return (
		<div className={classNames(cls.appInput, {}, [className])}>
			{placeholder && <div className={cls.placeholder}>{`${placeholder} >`}</div>}
			<div className={cls.caretWrapper}>
				<input className={cls.input}
					type={type}
					ref={ref}
					onFocus={onFocuse}
					onBlur={onBlur}
					onChange={changeHandler}
					value={value}
					onSelect={onSelect}
					{...otherProps} />
				{isFocuse && <span className={cls.caret} style={{ left: `${position * 6}px` }} />}
			</div>
		</div>
	)
});