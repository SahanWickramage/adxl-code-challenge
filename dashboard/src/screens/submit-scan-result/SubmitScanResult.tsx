function SubmitScanResult() {
    return (
        <>
            <h1>Enter Scan Result</h1>
            <form>
                <div>
                    <label>Status: </label>
                    <input type="text" id="status" />
                </div>
                <div>
                    <label>Repo Name: </label>
                    <input type="text" id="repoName" />
                </div>
                <div>
                    <p>Findings</p>
                    <div>
                        <label>Type: </label>
                        <input type="text" id="Type" />
                    </div>
                    <div>
                        <label>Rule Id: </label>
                        <input type="text" id="ruleId" />
                    </div>
                    <div>
                        <label>Line: </label>
                        <input type="number" id="line" />
                    </div>
                    <div>
                        <label>Severity: </label>
                        <input type="number" id="severity" />
                    </div>
                </div>
                <div>
                    <label>Queued At: </label>
                    <input type="datetime-local" id="repoName" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default SubmitScanResult;