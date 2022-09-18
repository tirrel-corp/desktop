import Window from './Screen/Window';

export default function Screen({ windows, selectedWindow, hiddenWindow, launchOpen, children }) {
    return <div className="grow" style={{marginInline: 'calc(-1 * 95vw)', paddingInline: '95vw'}}>
        {children}
        {windows.value.map((win, index) => <Window
            key={win.title}
            win={win}
            launchOpen={launchOpen}
            index={index}
            windows={windows}
            selectedWindow={selectedWindow}
            hiddenWindow={hiddenWindow}
        />)
        }
    </div>
}
