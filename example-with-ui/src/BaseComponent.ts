export interface Component {
    navigationLeftButton(): boolean;
    navigationUpButton(): boolean;
    navigationRightButton(): boolean;
    navigationDownButton(): boolean;
    confirmButton(): boolean;
    returnButton(): boolean;
    mediaPlayPauseButton(): boolean;
    isFocusable(): boolean;
    setActiveComponent(component: Component | undefined): void;
    readonly isActive: boolean;
    setIsFocusable(isFocusable: boolean): void;
    activate(): void;
    deactivate(): void;
    reset(): void;
    unload(): void;
}

export abstract class BaseComponent implements Component {
    protected player;
    protected components: Component[] = [];
    private _isFocusable: boolean;
    protected activeComponent: Component | undefined = undefined;
    private _active: boolean = false;

    protected constructor(player, isFocusable: boolean = false) {
        this.player = player;
        this._isFocusable = isFocusable;
    }

    navigationLeftButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || (next.isActive && next.navigationLeftButton()), false)
    }

    navigationUpButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || (next.isActive && next.navigationUpButton()), false)
    }

    navigationRightButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || (next.isActive && next.navigationRightButton()), false)
    }

    navigationDownButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || (next.isActive && next.navigationDownButton()), false)
    }

    confirmButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || (next.isActive && next.confirmButton()), false);
    }

    returnButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || next.isActive && next.returnButton(), false)
    }

    mediaPlayPauseButton() {
        if (!this.isActive) {
            return false;
        }

        return this.components.reduce((current, next) => current || next.isActive && next.mediaPlayPauseButton(), false)
    }

    isFocusable(): boolean {
        return this._isFocusable;
    }

    setIsFocusable(isFocusable: boolean): void {
        this._isFocusable = isFocusable;
    }

    registerComponent(component: Component) {
        this.components.push(component);
    }

    setActiveComponent(component: Component | undefined) {
        if (component !== this.activeComponent) {
            this.switchActiveComponent(component);
        }
    }

    private switchActiveComponent(newComponent: Component | undefined) {
        if (this.activeComponent && this.activeComponent.isActive) {
            this.activeComponent.deactivate();
        }

        this.activeComponent = newComponent;

        if (newComponent) {
            newComponent.activate();
        }
    }

    get isActive(): boolean {
        return this._active;
    }

    activate() {
        this._active = true;
        this.doActivate();
    }

    deactivate() {
        this._active = false;
        this.doDeactivate();
    }

    protected abstract doActivate(): void;

    protected abstract doDeactivate(): void;

    reset(): void {
        for (const component of this.components) {
            component.reset();
        }
    }

    unload(): void {
        for (const component of this.components) {
            component.unload();
        }
    }
}
